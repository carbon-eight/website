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
    title,
    targetAudience,
    description,
    pageLink,
  } = navItem;
  const { slug } = pageLink;
  if (slug === 'home') return null;
  const isActive = Boolean(`/${slug}/` === currentPath) || Boolean(currentPath === '/' && slug === 'home');
  return (
    <li key={slug} className={`nav-item ${isActive ? 'active' : ''}`}>
      {verbose && (
        <span className="audience">{targetAudience.text}</span>
      )}
      <Link
        to={`/${slug}/`}
        onClick={event => closeNav(event)}
        aria-label={`Navigate to ${title.text} page`}
      >
        <span>{title.text}</span>
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
