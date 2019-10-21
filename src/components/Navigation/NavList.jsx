import React from 'react';
import { NavItem } from '.';

const NavList = (props) => {
  const {
    location,
    navItems,
    closeNav,
    hoverHandler,
    hoverExitHandler,
  } = props;
  const { pathname: currentPath } = location;
  return (
    <nav className="navigation" role="navigation">
      <ul className="nav-items">
        {navItems && navItems.map(item => (
          <NavItem
            key={item.link.slug}
            navItem={item}
            currentPath={currentPath}
            closeNav={closeNav}
            hoverHandler={hoverHandler}
            hoverExitHandler={hoverExitHandler}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
