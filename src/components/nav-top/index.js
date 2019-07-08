import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavTop extends Component {
  constructor(props) {
    super(props);
  }

  onLogout = () => {

  }

  render() {
    return (
      <nav className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand"><b>Mall</b>Admin</Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw"></i>
              <span>欢迎，adminxxx</span>
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a onClick={this.onLogout}>
                  <i className="fa fa-sign-out fa-fw"></i>
                  退出登录
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavTop;
