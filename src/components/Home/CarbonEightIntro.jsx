import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import './CarbonEightIntro.scss';

const CarbonEightIntro = (props) => {
  const {
    intro,
  } = props;
  return (
    <div className="carbon-eight-intro">
      <Wrapper>
        <HtmlContent
          content={intro.html}
        />
      </Wrapper>
    </div>
  );
};

export default CarbonEightIntro;
