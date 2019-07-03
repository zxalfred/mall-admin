import React, { Component } from 'react';
import './theme.css';
import NavTop from '@/components/nav-top';
import NavSide from '@/components/nav-side';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrapper">
        <NavTop />
        <NavSide />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
