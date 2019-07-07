import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './CallToActionsBlock.scss';

const CallToActionsBlock = (props) => {
  const {
    callToActions,
  } = props;
  return (
    <div className="call-to-actions-block">
      <Wrapper>
        <div className="call-to-actions">
          { callToActions && callToActions.map((block, index) => {
            // const {
            //   blockImage,
            //   blockTitle,
            //   description,
            //   link,
            //   linkLabel,
            // } = block;
            return (
              <div className="call-to-action" key={generateKey(index)}>
                <span className="count">{getNumberedAffix(index)}</span>
                CallToAction
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default CallToActionsBlock;
