import React, { Component } from 'react'
import {
  ListGroup, ListGroupItem
} from 'reactstrap'
import moment from 'moment'
import { connect } from 'react-redux'

import { addTask, deleteTask } from '../redux/action/todos'


class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDelete: false,
      showInput: false
    }
  }

  showDelete = (e) => {
    e.preventDefault()
    this.setState({ showDelete: !this.state.showDelete })
  }

  addInput = (e) => {
    e.preventDefault()
    this.setState({ showInput: !this.state.showInput })
  }

  inputTask = (e) => {
    if (e.keyCode === 13) {
      this.props.addTask(e.target.value)
      this.setState({ showInput: !this.state.showInput })
    }
  }

  deleteTask = (e) => {
    e.preventDefault()
    this.props.deleteTask(e.target.value)
  }

  render() {
    return (
      <>
        <div className='d-flex flex-column h-100 w-100 no-gutters'>
          <div className='d-flex p-3 flex-column header justify-content-end h-25 no-gutters'>
            <p className='display-4 font-weight-bold text-white'>My Day</p>
            <h3 className='text-white'>{moment().format('dddd, MMMM DD')}</h3>
          </div>
          <div className='overflow-auto h-auto w-100' >
            <ListGroup flush>
              {this.props.todos.tasks.map((task, index) => (
                <ListGroupItem className='p-3 d-flex justify-content-between align-middle' tag="div">
                  <div>{task}</div>
                  <div className='text-danger' value={index} onClick={this.deleteTask}>- Remove Task</div>
                </ListGroupItem>
              ))}
              <ListGroupItem className='d-flex' href="#">
                <div className='text-info pr-5' onClick={this.addInput}>+ Add Task</div>
                {this.state.showInput && <input type='text' onKeyDown={this.inputTask} />}
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </>
    )
  }
}

const mapsStateToProps = state => ({
  todos: state.todos,
})

const mapsDispatchToProps = { addTask, deleteTask }

export default connect(mapsStateToProps, mapsDispatchToProps)(Todos)