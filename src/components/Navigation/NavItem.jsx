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
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 15">
            <path fill="#26C281" fillRule="nonzero" d="M.818 12.5l2.121 2.121L10 7.561 2.94.5.817 2.621l4.94 4.94z" />
          </svg>
        </div>
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
