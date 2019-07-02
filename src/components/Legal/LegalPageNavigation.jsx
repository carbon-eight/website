import React from 'react';
import './LegalPageNavigation.scss';

const scrollToPageSection = (event, index) => {
  if (event) event.preventDefault();
  const sectionId = `section-${index}`;
  const targetEl = document.getElementById(sectionId);
  if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const LegalPageNavigation = (props) => {
  const {
    sections,
  } = props;
  return (
    <div className="legal-page-navigation">
      { sections && sections.map((section, index) => {
        const { sectionHeading } = section;
        return (
          <button
            type="button"
            className="anchor-link"
            onClick={event => scrollToPageSection(event, index)}
            aria-label={`Jump to ${sectionHeading.text} section`}
          >
            <span>{sectionHeading.text}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LegalPageNavigation;
