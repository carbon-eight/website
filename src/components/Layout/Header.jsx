import React, { Component } from 'react';
import { Wrapper, Logo } from '../common';
import './Header.scss';


class Header extends Component {
  render() {
    const {
      navActive,
      toggleNavHandler,
    } = this.props;
    return (
      <header className="header">
        <Wrapper>
          <Logo clickable />
        </Wrapper>
      </header>
    );
  }
}

export default Header;
