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
    <div className={`navigation-menu ${navActive ? 'nav-open' : ''}`}>
      <div className="container">
        <Wrapper>
          <div className="menu-row">
            <NavList
              includeAudience
              includeDescription
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
        <div className="background-leaves">
          <svg viewBox="0 0 1277 838" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="M24.107 357.5c6.462-4.525 10.022-10.59 5.497-17.053-3.016-4.308-12.73-9.88-29.144-16.72.812 17.763 2.727 28.798 5.743 33.106 4.525 6.462 11.442 5.191 17.904.666z" />
              <path d="M806.727 41.535c7.86.688 14.485-1.67 15.172-9.529.459-5.24-3.4-15.753-11.578-31.541-10.795 14.128-16.422 23.812-16.88 29.051-.688 7.859 5.428 11.332 13.286 12.02z" />
              <path d="M1256.99 531.253c-7.09 3.458-11.556 8.892-8.097 15.982 2.305 4.727 11.028 11.751 26.17 21.073 1.976-17.67 1.811-28.87-.494-33.596-3.458-7.09-10.49-6.917-17.58-3.46z" />
              <path d="M688.683 832.397c5.862 5.279 12.573 7.383 17.851 1.52 3.52-3.907 6.764-14.627 9.735-32.157-17.124 4.787-27.445 9.134-30.964 13.043-5.279 5.862-2.485 12.316 3.378 17.594z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};


export default NavigationMenu;
