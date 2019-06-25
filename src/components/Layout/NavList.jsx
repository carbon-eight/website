import React from 'react';
import { NavItem } from '.';
import './NavList.scss';

const NavList = (props) => {
  const {
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
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
