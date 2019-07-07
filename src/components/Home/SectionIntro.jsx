import React from 'react';
import { HtmlContent } from '../common';
import './SectionIntro.scss';

const SectionIntro = (props) => {
  const {
    headline,
    intro,
  } = props;
  return (
    <div className="section-intro">
      <h2 className="headline">
        {headline.text}
      </h2>
      <HtmlContent
        content={intro.html}
      />
    </div>
  );
};

export default SectionIntro;
