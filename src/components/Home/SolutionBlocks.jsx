import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Wrapper, HtmlContent } from '../common';
import { SolutionIllustration } from './SolutionIllustration';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './SolutionBlocks.scss';

const SolutionBlocks = (props) => {
  const {
    solutions,
    // isMobile,
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
            return (
              <VisibilitySensor
                key={generateKey(index)}
                partialVisibility
              >
                {({ isVisible }) => (
                  <div className="solution">
                    <div className="col image-col">
                      <div className={`illustration${isVisible ? ' visible' : ''}`}>
                        <SolutionIllustration
                          illustration={illustration}
                          isVisible={isVisible}
                        />
                      </div>
                    </div>
                    <div className="col text-col">
                      <div className="text-container">
                        <span className="count">{`Technique ${getNumberedAffix(index)}`}</span>
                        <h3 className="title">
                          <span className={isVisible ? 'visible' : ''}>
                            {title.text}
                          </span>
                        </h3>
                        <HtmlContent
                          content={description.html}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </VisibilitySensor>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default SolutionBlocks;
