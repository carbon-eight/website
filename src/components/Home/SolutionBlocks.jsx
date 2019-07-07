import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix, toKebabCase } from '../../util/helpers';
import './SolutionBlocks.scss';

const CROPPING_SOLUTION_ILLUSTRATION = 'multi-species-cropping';
const GRAZING_SOLUTION_ILLUSTRATION = 'holistic-grazing';
const WATER_CYCLE_SOLUTION_ILLUSTRATION = 'water-cycle-restoration';

const SolutionIllustration = ({ illustration }) => {
  const illustrationId = toKebabCase(illustration);
  switch (illustrationId) {
    case (CROPPING_SOLUTION_ILLUSTRATION):
      return null;
    case (GRAZING_SOLUTION_ILLUSTRATION):
      return null;
    case (WATER_CYCLE_SOLUTION_ILLUSTRATION):
      return null;
    default:
      return null;
  }
};

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
