import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { IssueIllustration } from './IssueIllustration';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './IssueBlocks.scss';

const IssueBlocks = (props) => {
  const {
    issues,
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
            return (
              <div className="issue" key={generateKey(index)}>
                <div className="illustration">
                  <IssueIllustration illustration={illustration} />
                </div>
                <span className="count">{`Issue ${getNumberedAffix(index)}`}</span>
                <h3>{title.text}</h3>
                <HtmlContent
                  content={description.html}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default IssueBlocks;
