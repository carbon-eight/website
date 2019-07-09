import React from 'react';
import { Link } from 'gatsby';
import { Logo, Wrapper, CurlyDivider } from '../common';
import {
  COLOUR_WHITE,
  COLOUR_EARTH_LIGHTER,
  COLOUR_EARTH_EVEN_LIGHTER,
} from '../../util/colours';
import { NavItem } from '../Navigation';
import './Footer.scss';

const Footer = (props) => {
  const {
    settings,
    location,
    isSmallMobile,
  } = props;
  const {
    legalLinks,
    socialLinks,
    email,
  } = settings;
  const { pathname: currentPath } = location;
  const isHome = Boolean(currentPath === '/');
  return (
    <footer className="footer">
      <CurlyDivider
        topColor={COLOUR_WHITE}
        bottomColor={COLOUR_EARTH_LIGHTER}
        isSmallMobile={isSmallMobile}
      />
      <div className="soil-padding" />
      <CurlyDivider
        topColor={COLOUR_EARTH_LIGHTER}
        bottomColor={COLOUR_EARTH_EVEN_LIGHTER}
        isSmallMobile={isSmallMobile}
      />
      <div className="footer-content">
        <Wrapper>
          <div className="cols">
            <div className="col col-logo">
              <Logo collapsed clickable />
            </div>
            <div className="col col-legals">
              <span className="label">Legal</span>
              <ul className="nav-items">
                {legalLinks && legalLinks.map((legalNavItem) => {
                  const {
                    linkLabel,
                    link,
                  } = legalNavItem;
                  const { slug } = link;
                  if (slug === 'home') return null;
                  return (
                    <li className="nav-item">
                      <Link
                        key={slug}
                        to={`/${slug}/`}
                        className="nav-link col-value"
                        aria-label={`Navigate to ${linkLabel.text} page`}
                      >
                        <span>{linkLabel.text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col col-socials">
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
                        className="social-link col-value"
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
            <div className="col col-contact">
              <span className="label">Email</span>
              <a
                className="email col-value"
                href={`mailto:${email.text}`}
                aria-label={`Send email to ${email.text}`}
              >
                {email.text}
              </a>
            </div>
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
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;
