
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer'
import React, { Component } from 'react'

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
        {/* todolist begin */}
        {/* <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={this.state.todos} checkedAll={this.checkedAll} clearAllDone={this.clearAllDone} />
          </div>
        </div> */}
        {/* todolist end */}
        <div chassName="row">
      <div chassName="col-xs-offset-2 col-xs-8">
        <div chassName="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div chassName="row">
      <div chassName="col-xs-2 col-xs-offset-2">
        <div chassName="list-group">
          <a chassName="list-group-item active" href="./about.html">About</a>
          <a chassName="list-group-item" href="./home.html">Home</a>
        </div>
      </div>
      <div chassName="col-xs-6">
        <div chassName="panel">
          <div chassName="panel-body">
            <h3>我是About的内容</h3>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

export default App;
