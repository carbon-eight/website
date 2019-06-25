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
          <Logo classes={`${navActive ? 'nav-open' : ''}`} clickable />
          <button
            className="toggle-nav-button"
            type="button"
            aria-label="Toggle Navigation"
            onClick={event => toggleNavHandler(event)}
          >
            {navActive ? (
              <svg className="close-icon" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M4.243 0L27.93 23.687l-4.243 4.242L0 4.242z" />
                  <path d="M0 23.688L23.687 0l4.242 4.243L4.242 27.93z" />
                </g>
              </svg>
            ) : (
              <svg className="hamburger-icon" viewBox="0 0 38 26" xmlns="http://www.w3.org/2000/svg">
                <g fill="#26C281" fillRule="evenodd">
                  <path d="M4.5 0H38v6H4.5z" />
                  <path d="M4.5 20H38v6H4.5z" />
                  <path d="M0 10h38v6H0z" />
                </g>
              </svg>
            )}
          </button>
        </Wrapper>
      </header>
    );
  }
}

export default Header;
