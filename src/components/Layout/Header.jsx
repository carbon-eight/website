import React, { Component } from 'react';
// import { Navigation } from '.';
import { Wrapper, Logo } from '../common';

class Header extends Component {
  render() {
    // const {
    //   location,
    //   navigation,
    // } = this.props;
    return (
      <header className="header">
        <Wrapper>
          <Logo />
        </Wrapper>
      </header>
    );
  }
}

export default Header;
