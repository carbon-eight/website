import React from 'react';
import Lottie from 'react-lottie';
import croppingAnimation from '../../assets/animations/solutions/cropping.json';
import grazingAnimation from '../../assets/animations/solutions/grazing.json';
import waterwaysAnimation from '../../assets/animations/solutions/waterways.json';
import { toKebabCase } from '../../util/helpers';

const CROPPING_SOLUTION_ILLUSTRATION = 'multi-species-cropping';
const GRAZING_SOLUTION_ILLUSTRATION = 'holistic-grazing';
const WATER_CYCLE_SOLUTION_ILLUSTRATION = 'water-cycle-restoration';

export const SolutionIllustration = ({ illustration }) => {
  const illustrationId = toKebabCase(illustration);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  switch (illustrationId) {
    case (CROPPING_SOLUTION_ILLUSTRATION):
      return (
        <Lottie
          options={{
            ...defaultOptions,
            animationData: croppingAnimation,
          }}
        />
      );
    case (GRAZING_SOLUTION_ILLUSTRATION):
      return (
        <Lottie
          options={{
            ...defaultOptions,
            animationData: grazingAnimation,
          }}
        />
      );
    case (WATER_CYCLE_SOLUTION_ILLUSTRATION):
      return (
        <Lottie
          options={{
            ...defaultOptions,
            animationData: waterwaysAnimation,
          }}
        />
      );
    default:
      return null;
  }
};
