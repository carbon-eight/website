import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { SolutionIllustration } from './SolutionIllustration';
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
          { solutions && solutions.map((technique, index) => {
            const {
              title,
              description,
              illustration,
            } = technique;
            return (
              <div className="solution" key={generateKey(index)}>
                <div className="illustration">
                  <SolutionIllustration illustration={illustration} />
                </div>
                <span className="count">{`Technique ${getNumberedAffix(index)}`}</span>
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

export default SolutionBlocks;
