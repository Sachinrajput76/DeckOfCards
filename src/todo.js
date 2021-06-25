import React, { Component } from 'react'
import './todo.css'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task,
    }
    this.removeHandler = this.removeHandler.bind(this)
    this.editTask = this.editTask.bind(this)
    this.editUpdate = this.editUpdate.bind(this)
    this.editChange = this.editChange.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  removeHandler() {
    this.props.removeTask(this.props.id)
  }
  editTask() {
    this.setState({ isEditing: !this.state.isEditing })
  }
  editUpdate(evt) {
    evt.preventDefault()

    this.props.update(this.props.id, this.state.task)
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }
  editChange(event) {
    this.setState({
      task: event.target.value,
    })
  }
  toggleCompleted() {
    this.props.toggleCompletion(this.props.id)
  }
  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.editUpdate}>
          <input
            type='text'
            onChange={this.editChange}
            value={this.state.task}
          />
          <button>save</button>
        </form>
      )
    } else {
      result = (
        <div>
          <button onClick={this.editTask}>edit</button>
          <button onClick={this.removeHandler}>delete</button>
          <li
            onClick={this.toggleCompleted}
            className={this.props.completed && 'completed'}
          >
            {this.props.task}
          </li>
        </div>
      )
    }
    return result
  }
}
