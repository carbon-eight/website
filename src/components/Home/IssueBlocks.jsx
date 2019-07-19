import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {
  Wrapper,
  HtmlContent,
} from '../common';
import { IssueIllustration } from './IssueIllustration';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './IssueBlocks.scss';

const IssueBlocks = (props) => {
  const {
    issues,
    isMobile,
    loadAnimations,
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
              <VisibilitySensor
                key={generateKey(index)}
                partialVisibility
              >
                {({ isVisible }) => (
                  <div className="issue">
                    <div className={`illustration${loadAnimations ? ' visible' : ''}`}>
                      <IssueIllustration
                        illustration={illustration}
                        isVisible={isVisible}
                        loadAnimations={loadAnimations}
                      />
                    </div>
                    <div className="text-container">
                      <span className="count">{`Issue ${getNumberedAffix(index)}`}</span>
                      <h3 className="title">
                        <span className={isVisible ? 'visible' : ''} style={styles}>
                          {title.text}
                        </span>
                      </h3>
                      <HtmlContent
                        content={description.html}
                      />
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

export default IssueBlocks;
