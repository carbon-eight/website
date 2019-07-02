import React from 'react';
import { HtmlContent } from '../common';
import './LegalPageSection.scss';

export const getSectionId = index => `section-${index}`;

const LegalPageSection = (props) => {
  const {
    index,
    section,
  } = props;
  const {
    sectionHeading,
    content,
  } = section;
  return (
    <div
      id={getSectionId(index)}
      className="legal-page-section"
    >
      <h2>{sectionHeading.text}</h2>
      <HtmlContent
        content={content.html}
      />
    </div>
  );
};

export default LegalPageSection;
