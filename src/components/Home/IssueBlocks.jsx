import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './IssueBlocks.scss';

const IssueBlocks = (props) => {
  const {
    issues,
  } = props;
  return (
    <div className="issue-blocks">
      <Wrapper>
        <div className="call-to-actions">
          { issues && issues.map((issue, index) => {
            // const {
            //   blockImage,
            //   blockTitle,
            //   description,
            //   link,
            //   linkLabel,
            // } = block;
            return (
              <div className="issue" key={generateKey(index)}>
                <span className="count">{getNumberedAffix(index)}</span>
                Issue
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default IssueBlocks;
