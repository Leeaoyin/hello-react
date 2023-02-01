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


               
            </div>
        )
    }
};
