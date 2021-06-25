import { Component } from 'react'
import Todo from './todo'
import FormTodo from './formTodo'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    this.create = this.create.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.update = this.update.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }
  removeTask(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    })
  }
  update(id, newTodo) {
    const updatedTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTodo }
      }
      return todo
    })
    this.setState({
      todos: updatedTodo,
    })
  }
  toggleCompletion(id) {
    const updatedTodo = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    this.setState({
      todos: updatedTodo,
    })
  }
  render() {
    const todo = this.state.todos.map((todo) => {
      return (
        <Todo
          removeTask={this.removeTask}
          key={todo.id}
          id={todo.id}
          task={todo.task}
          update={this.update}
          completed={todo.completed}
          toggleCompletion={this.toggleCompletion}
        />
      )
    })
    return (
      <div>
        <h1>this is my todo list</h1>
        <ul>
          {todo}
          <FormTodo create={this.create} />
        </ul>
      </div>
    )
  }
}
