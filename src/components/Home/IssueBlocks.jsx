import React from 'react';
import OnVisible from 'react-on-visible';
import {
  Wrapper,
  HtmlContent,
  Lottie,
} from '../common';
import { IssueIllustration } from './IssueIllustration';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import droughtAnimation from '../../assets/animations/drought.json';
import diversityAnimation from '../../assets/animations/diversity.json';
import grazingAnimation from '../../assets/animations/grazing.json';
import croppingAnimation from '../../assets/animations/cropping.json';
import emissionsAnimation from '../../assets/animations/emissions.json';
import './IssueBlocks.scss';

const IssueBlocks = (props) => {
  const {
    issues,
    isMobile,
  } = props;
  return (
    <div className="issue-blocks">
      <Wrapper>
        <div className="issues">
          { issues && issues.map((issue, index) => {
            const {
              title,
              description,
              illustration,
            } = issue;
            const styles = isMobile ? {} : { transitionDelay: `${index * 1}s` };
            return (
              <div className="issue" key={generateKey(index)}>
                <div className="illustration">
                  <IssueIllustration illustration={illustration} />
                </div>
                <div className="text-container">
                  <span className="count">{`Issue ${getNumberedAffix(index)}`}</span>
                  <h3 className="title">
                    <OnVisible
                      wrappingElement="span"
                      style={styles}
                    >
                      {title.text}
                    </OnVisible>
                  </h3>
                  <HtmlContent
                    content={description.html}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Lottie
          container="diversity-animation"
          animationData={diversityAnimation}
          loop
          autoplay
        />
        <Lottie
          container="emissions-animation"
          animationData={emissionsAnimation}
          loop
          autoplay
        />
        <Lottie
          container="drought-animation"
          animationData={droughtAnimation}
          loop
          autoplay
        />
        <Lottie
          container="grazing-animation"
          animationData={grazingAnimation}
          loop
          autoplay
        />
        <Lottie
          container="cropping-animation"
          animationData={croppingAnimation}
          loop
          autoplay
        />
      </Wrapper>
    </div>
  );
};

export default IssueBlocks;
