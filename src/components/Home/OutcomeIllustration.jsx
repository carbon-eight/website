import React from 'react';
import {
  Lottie,
} from '../common';
import biodiversityAnimation from '../../assets/animations/outcomes/biodiversity.json';
import drawdownAnimation from '../../assets/animations/outcomes/drawdown.json';
import produceAnimation from '../../assets/animations/outcomes/produce.json';
import waterAnimation from '../../assets/animations/outcomes/water.json';
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
        <Lottie
          container="biodiversity-animation"
          animationData={biodiversityAnimation}
          autoplay={false}
          loop={false}
        />
      );
    case (CARBON_OUTCOME_ILLUSTRATION):
      return (
        <Lottie
          container="drawdown-animation"
          animationData={drawdownAnimation}
          autoplay={false}
          loop={false}
        />
      );
    case (WATER_OUTCOME_ILLUSTRATION):
      return (
        <Lottie
          container="water-animation"
          animationData={waterAnimation}
          autoplay={false}
          loop={false}
        />
      );
    case (PRODUCE_OUTCOME_ILLUSTRATION):
      return (
        <Lottie
          container="produce-animation"
          animationData={produceAnimation}
          autoplay={false}
          loop={false}
        />
      );
    default:
      return null;
  }
};
