import React from 'react';
import { Link } from 'gatsby';
import { Logo, Wrapper, CurlyDivider } from '../common';
import {
  COLOUR_WHITE,
  COLOUR_EARTH_LIGHTER,
  COLOUR_EARTH_EVEN_LIGHTER,
} from '../../util/colours';
import './Footer.scss';

const Footer = (props) => {
  const {
    settings,
    location,
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
      />
      <div className="soil-padding" />
      <CurlyDivider
        topColor={COLOUR_EARTH_LIGHTER}
        bottomColor={COLOUR_EARTH_EVEN_LIGHTER}
      />
      <div className="footer-content">
        <div className="footer-top">
          <Wrapper>
            <div className="cols">
              <div className="col col-logo">
                <Logo collapsed clickable />
              </div>
              <div className="col col-legals">
                <span className="label">Legal</span>
                <ul className="nav-items">
                  {legalLinks && legalLinks.map((legalNavItem, index) => {
                    const {
                      linkLabel,
                      link,
                    } = legalNavItem;
                    const { slug } = link;
                    if (slug === 'home') return null;
                    return (
                      <li className="nav-item col-value" key={index}>
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
          </Wrapper>
        </div>
        <div className="footer-bottom">
          <Wrapper>
            <div className="row-item">
              <div className="australian-charity">
                <div className="acnc-logo" />
                <p className="acnc-text">Carbon8 is a registered charity</p>
              </div>
            </div>
            <div className="row-item">
              <p className="signature">
                <span>Website by</span>
                { isHome ? (
                  <a
                    className="studio"
                    href="https://srrycmpny.com/"
                    aria-label="Navigate to Sorry Company's website"
                    target="_blank"
                  >
                    <span>Sorry Company</span>
                  </a>
                ) : (
                  <span className="studio">Sorry Company</span>
                )}
              </p>
            </div>
          </Wrapper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
