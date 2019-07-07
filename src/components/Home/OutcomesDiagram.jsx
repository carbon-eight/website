import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix, toKebabCase } from '../../util/helpers';
import './OutcomesDiagram.scss';

const BIODIVERSITY_OUTCOME_ILLUSTRATION = 'biodiversity';
const CARBON_OUTCOME_ILLUSTRATION = 'carbon-drawdown';
const WATER_OUTCOME_ILLUSTRATION = 'water-retention';
const PRODUCE_OUTCOME_ILLUSTRATION = 'healthier-produce';

const OutcomeIllustration = ({ illustration }) => {
  const illustrationId = toKebabCase(illustration);
  switch (illustrationId) {
    case (BIODIVERSITY_OUTCOME_ILLUSTRATION):
      return null;
    case (CARBON_OUTCOME_ILLUSTRATION):
      return null;
    case (WATER_OUTCOME_ILLUSTRATION):
      return null;
    case (PRODUCE_OUTCOME_ILLUSTRATION):
      return null;
    default:
      return null;
  }
};

const OutcomesDiagram = (props) => {
  const {
    outcomes,
  } = props;
  return (
    <div className="outcomes-diagram">
      <Wrapper>
        <div className="outcomes">
          { outcomes && outcomes.map((outcome, index) => {
            const {
              title,
              description,
              illustration,
            } = outcome;
            return (
              <div className="outcome" key={generateKey(index)}>
                <div className="illustration">
                  <OutcomeIllustration illustration={illustration} />
                </div>
                <span className="count">{`Outcome ${getNumberedAffix(index)}`}</span>
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

export default OutcomesDiagram;
