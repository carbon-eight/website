import React from 'react';
import { Link } from 'gatsby';

const NavItem = (props) => {
  const {
    includeAudience,
    includeDescription,
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
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      {includeAudience && (
        <span className="audience">{audience.text}</span>
      )}
      <Link
        to={`/${slug}/`}
        className="nav-link"
        onClick={closeNav ? event => closeNav(event) : null}
        aria-label={`Navigate to ${linkLabel.text} page`}
      >
        <span>{linkLabel.text}</span>
      </Link>
      {includeDescription && (
        <p className="description">
          {description.text}
        </p>
      )}
    </li>
  );
};

export default NavItem;
