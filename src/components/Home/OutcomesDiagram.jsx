import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './OutcomesDiagram.scss';

const OutcomesDiagram = (props) => {
  const {
    outcomes,
  } = props;
  return (
    <div className="outcomes-diagram">
      <Wrapper>
        <div className="outcomes">
          { outcomes && outcomes.map((outcome, index) => {
            // const {
            //   blockImage,
            //   blockTitle,
            //   description,
            //   link,
            //   linkLabel,
            // } = block;
            return (
              <div className="outcome" key={generateKey(index)}>
                <span className="count">{getNumberedAffix(index)}</span>
                Outcome
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default OutcomesDiagram;
