import React from 'react';
import { Link } from 'gatsby';

const NavItem = (props) => {
  const {
    verbose,
    navItem,
    currentPath,
    closeNav,
  } = props;
  const {
    linkLabel,
    audience,
    description,
    link,
  } = navItem;
  const { slug } = link;
  if (slug === 'home') return null;
  const isActive = Boolean(`/${slug}/` === currentPath) || Boolean(currentPath === '/' && slug === 'home');
  return (
    <li key={slug} className={`nav-item ${isActive ? 'active' : ''}`}>
      {verbose && (
        <span className="audience">{audience.text}</span>
      )}
      <Link
        to={`/${slug}/`}
        className="nav-link"
        onClick={event => closeNav(event)}
        aria-label={`Navigate to ${linkLabel.text} page`}
      >
        <span>{linkLabel.text}</span>
      </Link>
      {verbose && (
        <p className="description">
          {description.text}
        </p>
      )}
    </li>
  );
};

export default NavItem;
