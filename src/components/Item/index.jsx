import React, { Component } from 'react'

export default class Item extends Component {

  state = {
    mouse: false,
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  handleChecked = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }
  handleDelete = (id) => {
    this.props.deleteTodo(id);
  }
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li style={{ backgroundColor: mouse ? '#4e90f5' : 'white', color: mouse ? 'white' : 'black' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} >
        <label>
          <input type="checkbox" defaultChecked={done ? true : false} onChange={this.handleChecked(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
