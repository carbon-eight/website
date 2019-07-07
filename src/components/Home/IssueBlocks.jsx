import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import './IssueBlocks.scss';

const IssueBlocks = (props) => {
  const {
    someProp,
  } = props;
  return (
    <div className="issue-blocks">
      <Wrapper>
        IssueBlocks
      </Wrapper>
    </div>
  );
};

export default IssueBlocks;
