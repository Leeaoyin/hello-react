import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';


import { Link, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Router_practice/Home';
import About from './components/Router_practice/About';

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
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item active" href="./about.html">About</a>
          <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 在react中靠路由实现组件切换功能 */}
              {/* 不同的BrowserRouter不能相互通信，比如这里写了两个BrowserRouter就不能实现效果，要把所有元素包含在一个BrowserRouter中 */}
              {/* <BrowserRouter> */}
                <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
              {/* </BrowserRouter> */}

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* <BrowserRouter> */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                {/* </BrowserRouter> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
