import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    // const{children} = this.props;
    return (
      <div>
        {/* <NavLink className="list-group-item" {...this.props}>{children}</NavLink> */}
        <NavLink className="list-group-item" {...this.props} />
      </div>
    )
  }
}
