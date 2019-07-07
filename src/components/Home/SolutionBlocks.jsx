import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './SolutionBlocks.scss';

const SolutionBlocks = (props) => {
  const {
    solutions,
  } = props;
  return (
    <div className="solution-blocks">
      <Wrapper>
        <div className="solutions">
          { solutions && solutions.map((block, index) => {
            // const {
            //   blockImage,
            //   blockTitle,
            //   description,
            //   link,
            //   linkLabel,
            // } = block;
            return (
              <div className="solution" key={generateKey(index)}>
                <span className="count">{getNumberedAffix(index)}</span>
                SolutionBlock
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default SolutionBlocks;
