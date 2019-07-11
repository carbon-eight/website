import React from 'react';
import OnVisible from 'react-on-visible';
import { Wrapper, HtmlContent } from '../common';
import { SolutionIllustration } from './SolutionIllustration';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './SolutionBlocks.scss';

const SolutionBlocks = (props) => {
  const {
    solutions,
    isMobile,
  } = props;
  return (
    <div className="solution-blocks">
      <Wrapper>
        <div className="solutions">
          { solutions && solutions.map((technique, index) => {
            const {
              title,
              description,
              illustration,
            } = technique;
            const styles = isMobile ? {} : { transitionDelay: `${index * 1}s` };
            return (
              <div className="solution" key={generateKey(index)}>
                <div className="col image-col">
                  <div className="illustration">
                    <SolutionIllustration illustration={illustration} />
                  </div>
                </div>
                <div className="col text-col">
                  <div className="text-container">
                    <span className="count">{`Technique ${getNumberedAffix(index)}`}</span>
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
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default SolutionBlocks;
