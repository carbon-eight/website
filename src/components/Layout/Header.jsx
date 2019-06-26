import React, { Component } from 'react';
import { Logo } from '../common';
import './Header.scss';

const isClient = typeof window !== 'undefined';

class Header extends Component {
  state = {
    headerHeight: 0,
    viewportTopPos: 0,
    scrollingUp: false,
  };

  componentDidMount() {
    const headerHeight = this.headerRef.clientHeight;
    this.setState({ headerHeight });
    if (isClient) {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    }
  }

  componentWillUnmount() {
    if (isClient) window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { viewportTopPos: prevTopPos } = this.state;
    const newTopPos = window.scrollY;
    this.setState({
      viewportTopPos: newTopPos,
      scrollingUp: Boolean(prevTopPos > newTopPos),
    });
  }

  render() {
    const {
      navActive,
      toggleNavHandler,
    } = this.props;
    const {
      viewportTopPos,
      scrollingUp,
      headerHeight,
    } = this.state;
    const headroomTop = Boolean(viewportTopPos < headerHeight);
    const headerClasses = `header ${scrollingUp ? ' scrolling-up' : ''}${headroomTop ? ' headroom--top' : ' headroom--not-top'}`;
    return (
      <header className={headerClasses} ref={headerRef => this.headerRef = headerRef}>
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
      </header>
    );
  }
}

export default Header;
