import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MyNavLink from './MyNavLink'

export default class RouPapp extends Component {
  render() {
    return (
      <div>
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
              <MyNavLink to="/about" name="About">About</MyNavLink>
              <MyNavLink to="/home" name="Home">Home</MyNavLink>
              {/* </BrowserRouter> */}

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* <BrowserRouter> */}
                <Switch>
                  {/* switch组件：当有多个组件路径匹配时，只展示第一个 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Switch>
                {/* </BrowserRouter> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
