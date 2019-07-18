import React from 'react';
import Lottie from 'react-lottie';
import biodiversityAnimation from '../../assets/animations/outcomes/biodiversity.json';
import drawdownAnimation from '../../assets/animations/outcomes/drawdown.json';
import produceAnimation from '../../assets/animations/outcomes/produce.json';
import waterAnimation from '../../assets/animations/outcomes/water.json';
import { toKebabCase } from '../../util/helpers';

const BIODIVERSITY_OUTCOME_ILLUSTRATION = 'biodiversity';
const CARBON_OUTCOME_ILLUSTRATION = 'carbon-drawdown';
const WATER_OUTCOME_ILLUSTRATION = 'water-retention';
const PRODUCE_OUTCOME_ILLUSTRATION = 'healthier-produce';

export const OutcomeIllustration = ({ illustration, isVisible }) => {
  const illustrationId = toKebabCase(illustration);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  switch (illustrationId) {
    case (BIODIVERSITY_OUTCOME_ILLUSTRATION):
      return (
        <Lottie
          options={{
            ...defaultOptions,
            animationData: biodiversityAnimation,
          }}
          isStopped={!isVisible}
          isPaused={!isVisible}
        />
      );
    case (CARBON_OUTCOME_ILLUSTRATION):
      return (
        <Lottie
          options={{
            ...defaultOptions,
            animationData: drawdownAnimation,
          }}
          isStopped={!isVisible}
          isPaused={!isVisible}
        />
      );
    case (WATER_OUTCOME_ILLUSTRATION):
      return (
        <Lottie
          className="animation"
          options={{
            ...defaultOptions,
            animationData: waterAnimation,
          }}
          isStopped={!isVisible}
          isPaused={!isVisible}
        />
      );
    case (PRODUCE_OUTCOME_ILLUSTRATION):
      return (
        <Lottie
          options={{
            ...defaultOptions,
            animationData: produceAnimation,
          }}
          isStopped={!isVisible}
          isPaused={!isVisible}
        />
      );
    default:
      return null;
  }
};
