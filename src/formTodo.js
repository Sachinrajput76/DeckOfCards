import React from 'react'
import uuid from 'uuid/dist/v4'

class FormTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: [{ task: '' }],
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  submitForm(evt) {
    evt.preventDefault()
    this.props.create({ ...this.state, id: uuid(), completed: false })
    this.setState({
      task: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor='task'>
          <input
            id='task'
            name='task'
            placeholder='write your task'
            type='text'
            value={this.state.task}
            onChange={this.inputChangeHandler}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
export default FormTodo
