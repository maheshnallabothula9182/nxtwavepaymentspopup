import React, {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTodoItem: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  editTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, isEditing: !eachTodo.isEditing}
      }
      return eachTodo
    })

    this.setState({
      todosList: updatedTodosList,
    })
  }

  saveTodo = (id, newTitle) => {
    const {todosList} = this.state
    const updatedTodosList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, title: newTitle, isEditing: false}
      }
      return eachTodo
    })

    this.setState({
      todosList: updatedTodosList,
    })
  }

  toggleTodoCompletion = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, completed: !eachTodo.completed}
      }
      return eachTodo
    })

    this.setState({
      todosList: updatedTodosList,
    })
  }

  onChangeInput = event => {
    this.setState({newTodoItem: event.target.value})
  }

  addNewTodo = () => {
    const {todosList, newTodoItem} = this.state
    const [title, count] = newTodoItem.split(' ')
    const todoCount = Number(count) || 1
    const newId = todosList.length ? todosList[todosList.length - 1].id + 1 : 1
    const newTodos = Array.from({length: todoCount}, (_, index) => ({
      id: newId + index,
      title,
      completed: false,
      isEditing: false,
    }))
    this.setState({
      todosList: [...todosList, ...newTodos],
      newTodoItem: '',
    })
  }

  render() {
    const {todosList, newTodoItem} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="new-todo-cont">
            <input
              className="new-todo"
              placeholder="Add new todo item (title count)"
              value={newTodoItem}
              onChange={this.onChangeInput}
            />
            <button className="add-btn" type="button" onClick={this.addNewTodo}>
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
                saveTodo={this.saveTodo}
                toggleTodoCompletion={this.toggleTodoCompletion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
