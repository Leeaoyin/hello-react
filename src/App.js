
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer'
import React, { Component } from 'react'

class App extends Component {

  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '写作业', done: false },
      { id: '003', name: '玩', done: false },
      { id: '004', name: '洗衣', done: false },
    ]
  }
  //用于添加一个todo
  addTodo = (todoObj) => {
    const {todos} = this.state;
    const newTodos = [todoObj,...todos];
    this.setState({todos:newTodos});
  }

  updateTodo = (id, done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((obj)=>{
      if(obj.id === id) return {...obj,done};
      else return obj;
    });
    this.setState(newTodos);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List todos={this.state.todos} />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
