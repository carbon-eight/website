import React from 'react';
import { Link } from 'gatsby';
import { Logo, Wrapper } from '../common';
import { NavItem } from '../Navigation';
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
  const { pathname: currentPath } = location;
  const isHome = Boolean(currentPath === '/');
  return (
    <footer className="footer">
      <div className="top-layer layer">
        <svg className="curve" viewBox="0 0 1600 37" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 27C93.753 9.208 230.821.312 411.203.312c136.01 0 394.76 16.573 776.246 26.688 82.97 2.2 220.486 2.2 412.551 0v10H0V27z" fill="#5B4A2F" fillRule="evenodd" />
        </svg>
      </div>
      <div className="middle-layer layer">
        <svg className="curve" viewBox="0 0 1600 33" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 26.688C93.753 8.895 230.821 0 411.203 0c136.01 0 394.76 16.572 776.246 26.688 82.97 2.2 220.486 2.2 412.551 0V33H0v-6.313z" fill="#3F321D" fillRule="evenodd" />
        </svg>
      </div>
      <div className="bottom-layer layer">
        <Wrapper>
          <div className="cols">
            <div className="col col-left">
              <div className="row logo-row">
                <div className="row-item">
                  <Logo collapsed clickable />
                </div>
              </div>
              <div className="row contact-row">
                <div className="row-item">
                  <span className="label">Follow</span>
                  <ul className="social-links">
                    {socialLinks && socialLinks.map((socialLink) => {
                      const {
                        type,
                        link,
                      } = socialLink;
                      return (
                        <li key={link.url}>
                          <a
                            className="social-link row-value"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open a new tab to ${type}`}
                          >
                            {type}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="row-item">
                  <span className="label">Email</span>
                  <a
                    className="email row-value"
                    href={`mailto:${email.text}`}
                    aria-label={`Send email to ${email.text}`}
                  >
                    {email.text}
                  </a>
                </div>
              </div>
            </div>
            <div className="col col-right">
              <div className="row">
                <ul className="nav-items">
                  {navItems && navItems.map(item => (
                    <NavItem
                      key={item.link.slug}
                      navItem={item}
                      currentPath={currentPath}
                      includeAudience
                    />
                  ))}
                  <li>
                    <span className="audience">Legal</span>
                    {legalLinks && legalLinks.map((legalNavItem) => {
                      const {
                        linkLabel,
                        link,
                      } = legalNavItem;
                      const { slug } = link;
                      if (slug === 'home') return null;
                      return (
                        <Link
                          key={slug}
                          to={`/${slug}/`}
                          className="nav-link"
                          aria-label={`Navigate to ${linkLabel.text} page`}
                        >
                          <span>{linkLabel.text}</span>
                        </Link>
                      );
                    })}
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="signature">
                  <span>Website by</span>
                  { isHome ? (
                    <a
                      className="studio"
                      href="https://www.littleandbig.com.au/"
                      aria-label="Navigate to Little & Big's website"
                    >
                      <span>Little & Big</span>
                    </a>
                  ) : (
                    <span className="studio">Little & Big</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;
