import React from 'react';
import { Wrapper, HtmlContent, CurlyDivider } from '../common';
import { COLOUR_TERTIARY } from '../../util/colours';
import './SectionIntro.scss';

const SectionIntro = (props) => {
  const {
    label,
    headline,
    intro,
    topColor,
    bottomColor,
  } = props;
  return (
    <div className="section-intro">
      <CurlyDivider
        topColor={topColor}
        bottomColor={COLOUR_TERTIARY}
      />
      <div className="container">
        <Wrapper>
          <span className="label">
            {label}
          </span>
          <h2 className="headline">
            {headline.text}
          </h2>
          <HtmlContent
            content={intro.html}
          />
        </Wrapper>
      </div>
      <CurlyDivider
        topColor={COLOUR_TERTIARY}
        bottomColor={bottomColor}
      />
    </div>
  );
};

export default SectionIntro;
