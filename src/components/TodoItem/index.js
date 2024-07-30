import React, {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {
    todoDetails,
    deleteTodo,
    editTodo,
    saveTodo,
    toggleTodoCompletion,
  } = props
  const {id, title, completed, isEditing} = todoDetails
  const [newTitle, setNewTitle] = useState(title)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onEditTodo = () => {
    if (isEditing) {
      saveTodo(id, newTitle)
    } else {
      editTodo(id)
    }
  }

  const onChangeTitle = event => {
    setNewTitle(event.target.value)
  }

  const onToggleCompletion = () => {
    toggleTodoCompletion(id)
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggleCompletion}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={onChangeTitle}
          className="edit-input"
        />
      ) : (
        <p className={`title ${completed ? 'completed' : ''}`}>{title}</p>
      )}
      <button type="button" className="edit-btn" onClick={onEditTodo}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
