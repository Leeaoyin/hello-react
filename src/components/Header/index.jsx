import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { message } from 'antd';

export default class Header extends Component {
    handleKeyUp = (event) => {
        const value = event.target.value;
        if (event.keyCode !== 13) return
        if (event.target.value.trim() === '') {
            message.warning('请输入');
            return;
        } else {
            message.success('添加完成');
        }
        const todoObj = { id: nanoid(), name: value, done: false }
        this.props.addTodo(todoObj);
        event.target.value = '';
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
                </div>
            </div>
        )
    }
}
