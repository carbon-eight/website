import React from 'react';
import { NavItem } from '.';

const NavList = (props) => {
  const {
    location,
    navItems,
    closeNav,
    includeAudience = false,
    includeDescription = false,
  } = props;
  const { pathname: currentPath } = location;
  return (
    <nav className="navigation" role="navigation">
      <ul className="nav-items">
        {navItems && navItems.map(item => (
          <NavItem
            navItem={item}
            currentPath={currentPath}
            closeNav={closeNav}
            includeAudience={includeAudience}
            includeDescription={includeDescription}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
