import React from 'react';
import { getSectionId } from './LegalPageSection';
import './LegalPageNavigation.scss';

const scrollToPageSection = (event, index) => {
  if (event) event.preventDefault();
  const targetEl = document.getElementById(getSectionId(index));
  if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const LegalPageNavigation = (props) => {
  const {
    sections,
  } = props;
  return (
    <nav className="legal-page-navigation">
      <ul className="nav-items">
        { sections && sections.map((section, index) => {
          const { sectionHeading } = section;
          const count = (index < 9) ? `0${index + 1}` : `${index + 1}`;
          return (
            <li className="nav-item">
              <button
                type="button"
                className="anchor-link"
                onClick={event => scrollToPageSection(event, index)}
                aria-label={`Jump to ${sectionHeading.text} section`}
              >
                <span className="count">{count}</span>
                <span className="section-title">{sectionHeading.text}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LegalPageNavigation;
