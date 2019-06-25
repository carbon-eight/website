import React from 'react';
import { Wrapper, SocialLink } from '../common';
import { NavList } from '.';
import './NavigationMenu.scss';

const NavigationMenu = (props) => {
  const {
    location,
    settings,
    navActive,
    closeNav,
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
            verbose
            location={location}
            navItems={navItems}
            closeNav={closeNav}
          />
        </div>
        <div className="menu-row">
          <div className="row-item email-item">
            <span className="label">Contact</span>
            <a
              className="email"
              href={`mailto:${email.text}`}
              aria-label={`Send email to ${email.text}`}
            >
              {email.text}
            </a>
          </div>
          <div className="row-item social-links-item">
            <span className="label">Follow</span>
            <ul className="social-links">
              {socialLinks && socialLinks.map(item => (
                <li key={item.type}>
                  <SocialLink socialLink={item} size="medium" theme="light" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};


export default NavigationMenu;
