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
    isSmallMobile,
  } = props;
  return (
    <div className="section-intro">
      <CurlyDivider
        topColor={topColor}
        bottomColor={COLOUR_TERTIARY}
        isSmallMobile={isSmallMobile}
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
        isSmallMobile={isSmallMobile}
      />
    </div>
  );
};

export default SectionIntro;
