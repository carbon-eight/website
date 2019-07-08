import React from 'react';
import { toKebabCase } from '../../util/helpers';

const BIODIVERSITY_OUTCOME_ILLUSTRATION = 'biodiversity';
const CARBON_OUTCOME_ILLUSTRATION = 'carbon-drawdown';
const WATER_OUTCOME_ILLUSTRATION = 'water-retention';
const PRODUCE_OUTCOME_ILLUSTRATION = 'healthier-produce';

export const OutcomeIllustration = ({ illustration }) => {
  const illustrationId = toKebabCase(illustration);
  switch (illustrationId) {
    case (BIODIVERSITY_OUTCOME_ILLUSTRATION):
      return (
        null
      );
    case (CARBON_OUTCOME_ILLUSTRATION):
      return (
        null
      );
    case (WATER_OUTCOME_ILLUSTRATION):
      return (
        null
      );
    case (PRODUCE_OUTCOME_ILLUSTRATION):
      return (
        null
      );
    default:
      return null;
  }
};
