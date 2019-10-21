import React from 'react';
import { Link } from 'gatsby';

const NavItem = (props) => {
  const {
    navItem,
    currentPath,
    closeNav,
    hoverHandler,
    hoverExitHandler,
  } = props;
  const {
    linkLabel,
    description,
    link,
  } = navItem;
  const { slug } = link;
  if (slug === 'home') return null;
  const isActive = Boolean(`/${slug}/` === currentPath) || Boolean(currentPath === '/' && slug === 'home');
  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link
        to={`/${slug}/`}
        className="nav-link"
        onClick={closeNav ? event => closeNav(event) : null}
        onMouseEnter={event => hoverHandler(event, description.text)}
        onMouseLeave={event => hoverExitHandler(event, false)}
        aria-label={`Navigate to ${linkLabel.text} page`}
      >
        <span>{linkLabel.text}</span>
      </Link>
    </li>
  );
};

export default NavItem;
