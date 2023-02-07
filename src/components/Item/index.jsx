import React, { Component } from 'react'
import { message, Popconfirm, Button } from 'antd';

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
  confirm = (e) => {
    const { id } = this.props;
    this.props.deleteTodo(id);
    message.success('已删除');
  }
  cancel = () => {
    message.error('已取消');
  }
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li  onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} >
        <label>
          <input type="checkbox" checked={done ? true : false} onChange={this.handleChecked(id)} />
          <span>{name}</span>
        </label>
        {/* <button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button> */}
        <div style={{ display: mouse ? 'block' : 'none', textAlign: 'right' }}>
          <Popconfirm
            title="删除"
            description="你确定要删除这一项吗?"
            onConfirm={this.confirm}
            // onCancel={this.cancel}
            okText="是"
            cancelText="否"
          >
            <Button type="primary">删除</Button>
          </Popconfirm>
        </div>
      </li>
    )
  }
}
