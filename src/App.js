import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import RouPapp from './components/pages';
import { ConfigProvider } from 'antd';



class App extends Component {


  //注意：状态在哪，操作状态的方法就在哪
  state = {
    todos: [
      { id: '001', name: '吃饭', done: false },
      { id: '002', name: '写作业', done: false },
      { id: '003', name: '玩', done: false },
      { id: '004', name: '洗衣', done: false },
    ]
  }
  //用于添加一个todo
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  }

  //更新一个todo对象
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((obj) => {
      if (obj.id === id) return { ...obj, done: done };
      else return obj;
    });
    this.setState({ todos: newTodos });
  }

  //删除一个todo对象
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    // console.log('删除后的todos',newTodos);
    this.setState({ todos: newTodos });

  }

  //全选
  checkedAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done }
    });
    this.setState({ todos: newTodos });
  }

  //清除所有已经完成的
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => { return todoObj.done === false });
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#F08080',
            },
          }}
        >
          {/* todolist begin */}
          <div className="todo-container">
            <div className="todo-wrap">
              <Header addTodo={this.addTodo} />
              <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
              <Footer todos={this.state.todos} checkedAll={this.checkedAll} clearAllDone={this.clearAllDone} />
            </div>
          </div>
        </ConfigProvider>
        {/* todolist end */}

        {/* <RouPapp></RouPapp> */}
      </div>
    )
  }
}

export default App;
