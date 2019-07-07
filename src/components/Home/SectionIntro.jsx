import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import './SectionIntro.scss';

const SectionIntro = (props) => {
  const {
    headline,
    intro,
  } = props;
  return (
    <div className="section-intro">
      <Wrapper>
        <h2 className="headline">
          {headline.text}
        </h2>
        <HtmlContent
          content={intro.html}
        />
      </Wrapper>
    </div>
  );
};

export default SectionIntro;
