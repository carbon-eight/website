import React from 'react';
import { Link } from 'gatsby';
import './NavItem.scss';

const NavItem = (props) => {
  const {
    navItem,
    currentPath,
    closeNav,
  } = props;
  const {
    title,
    pageLink,
  } = navItem;
  const { slug } = pageLink;
  const { text } = title;
  if (slug === 'home') return null;
  const isActive = Boolean(`/${slug}/` === currentPath) || Boolean(currentPath === '/' && slug === 'home');
  return (
    <li key={slug} className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link
        to={`/${slug}/`}
        onClick={event => closeNav(event)}
        aria-label={`Navigate to ${text} page`}
      >
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default NavItem;
