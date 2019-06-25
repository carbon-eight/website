import React from 'react';
import { Wrapper } from '../common';
import './Footer.scss';

const Footer = (props) => {
  const {
    settings,
    location,
  } = props;
  const {
    footerMenu: navItems,
    legalLinks,
    socialLinks,
    email,
  } = settings;
  return (
    <footer className="footer">
      <Wrapper>
        <span>Footer</span>
      </Wrapper>
    </footer>
  );
};

export default Footer;
