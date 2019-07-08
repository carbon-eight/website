import React from 'react';
import { Wrapper, HtmlContent, Logo } from '../common';
import './CarbonEightIntro.scss';

const CarbonEightIntro = (props) => {
  const {
    intro,
  } = props;
  return (
    <div className="carbon-eight-intro">
      <Wrapper>
        <Logo collapsed />
        <span className="label">The Carbon8 Goal</span>
        <HtmlContent
          content={intro.html}
        />
      </Wrapper>
    </div>
  );
};

export default CarbonEightIntro;
