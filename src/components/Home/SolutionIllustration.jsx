import React from 'react';
import {
  Lottie,
} from '../common';
import croppingAnimation from '../../assets/animations/solutions/cropping.json';
import grazingAnimation from '../../assets/animations/solutions/grazing.json';
import waterwaysAnimation from '../../assets/animations/solutions/waterways.json';
import { toKebabCase } from '../../util/helpers';

const CROPPING_SOLUTION_ILLUSTRATION = 'multi-species-cropping';
const GRAZING_SOLUTION_ILLUSTRATION = 'holistic-grazing';
const WATER_CYCLE_SOLUTION_ILLUSTRATION = 'water-cycle-restoration';

export const SolutionIllustration = ({ illustration }) => {
  const illustrationId = toKebabCase(illustration);
  switch (illustrationId) {
    case (CROPPING_SOLUTION_ILLUSTRATION):
      return (
        <Lottie
          container="cropping-animation"
          animationData={croppingAnimation}
          autoplay
          loop={false}
        />
      );
    case (GRAZING_SOLUTION_ILLUSTRATION):
      return (
        <Lottie
          container="grazing-animation"
          animationData={grazingAnimation}
          autoplay
          loop={false}
        />
      );
    case (WATER_CYCLE_SOLUTION_ILLUSTRATION):
      return (
        <Lottie
          container="waterways-animation"
          animationData={waterwaysAnimation}
          autoplay
          loop={false}
        />
      );
    default:
      return null;
  }
};
