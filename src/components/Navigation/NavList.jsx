import React from 'react';
import { NavItem } from '.';

const NavList = (props) => {
  const {
    verbose = false,
    location,
    navItems,
    closeNav,
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
            verbose={verbose}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
