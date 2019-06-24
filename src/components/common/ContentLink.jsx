import React from 'react';
import { Link } from 'gatsby';
import './ContentLink.scss';

const ContentLink = (props) => {
  const {
    link,
    linkLabel,
  } = props;
  if (link.target) {
    return (
      <a
        href={link.url}
        className="styled-button"
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
      className="styled-button"
      aria-label={`Navigate to ${linkLabel.text}`}
    >
      <span>{linkLabel.text}</span>
    </Link>
  );
};

export default ContentLink;
