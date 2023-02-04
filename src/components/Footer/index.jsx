import React, { Component } from 'react'

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkedAll(e.target.checked);

  }

  clearAllDone = () => {
    if (window.confirm('确认清楚已完成的吗？'))
      this.props.clearAllDone();
  }
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0);
    const totleCount = todos.length;
    return (
      <div className="todo-footer">
        <label>
          {/* 这里不用用defaultChecked，因为defaultChecked只能执行一次 */}
          <input type="checkbox" checked={doneCount === totleCount && totleCount !== 0 ? true : false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totleCount}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
      </div>
    )
  }
}
