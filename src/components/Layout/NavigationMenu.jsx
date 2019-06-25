import React from 'react';
import { Wrapper } from '../common';
import { NavList } from '.';
import './NavigationMenu.scss';

const NavigationMenu = (props) => {
  const {
    location,
    settings,
    navActive,
    closeNav,
    toggleNavHandler,
  } = props;
  const {
    primaryMenu: navItems,
    socialLinks,
    email,
  } = settings;
  return (
    <div className="navigation-menu">
      <Wrapper>
        <div className="menu-row">
          <NavList
            location={location}
            navItems={navItems}
            closeNav={closeNav}
          />
        </div>
      </Wrapper>
    </div>
  );
};


export default NavigationMenu;
