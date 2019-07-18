import React from 'react';
import OnVisible from 'react-on-visible';
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
      </Wrapper>
    </div>
  );
};

export default IssueBlocks;
