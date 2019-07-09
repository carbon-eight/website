import React from 'react';
import { Link } from 'gatsby';
import './ContentLink.scss';

const ContentLink = (props) => {
  const {
    link,
    linkLabel,
  } = props;
  if (!link || !linkLabel) return null;
  if (link.target) {
    return (
      <a
        href={link.url}
        className="cta-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Navigate to ${linkLabel.text}`}
      >
        <span>{linkLabel.text}</span>
      </a>
    );
  }
  return (
    <Link
      to={link.url}
      className="cta-button"
      aria-label={`Navigate to ${linkLabel.text}`}
    >
      <span>{linkLabel.text}</span>
    </Link>
  );
};

export default ContentLink;
