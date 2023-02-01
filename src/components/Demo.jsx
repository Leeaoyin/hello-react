import React from 'react';
import { Button, Modal, message } from 'antd';
import './Demo.css';

export default class Demo extends React.Component {

    state = {
        isModalOpen: false,
        handleCancel: '',
        handleOk: '',
    }
    showMessage = () => {
        this.setState({ isModalOpen: true })
    }
    handleOk = () => {
        message.info('已提交');
        this.setState({ isModalOpen: false })
    }
    handleCancel = () => {
        this.setState({ isModalOpen: false })
    }
    render() {
        return (
            <div className='demo'>
                <h1>hello react</h1>
                <Button type="primary" onClick={this.showMessage}>查看</Button>
                <Modal title="消息" open={this.state.isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>react脚手架</p>
                </Modal>


                <div className="todo-container">
                    <div className="todo-wrap">
                        <div className="todo-header">
                            <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
                        </div>
                        <ul className="todo-main">
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span>xxxxx</span>
                                </label>
                                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" />
                                    <span>yyyy</span>
                                </label>
                                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
                            </li>
                        </ul>
                        <div className="todo-footer">
                            <label>
                                <input type="checkbox" />
                            </label>
                            <span>
                                <span>已完成0</span> / 全部2
                            </span>
                            <button className="btn btn-danger">清除已完成任务</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
