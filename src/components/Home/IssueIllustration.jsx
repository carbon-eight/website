import React from 'react';
import Lottie from 'react-lottie';
import droughtAnimation from '../../assets/animations/issues/drought.json';
import emissionsAnimation from '../../assets/animations/issues/emissions.json';
import biodiversityAnimation from '../../assets/animations/issues/biodiversity.json';
import { toKebabCase } from '../../util/helpers';

const CARBON_EMISSIONS_ILLUSTRATION = 'carbon-emissions';
const BIODIVERSITY_ILLUSTRATION = 'reduction-of-biodiversity';
const DROUGHT_ILLUSTRATION = 'drought-and-desertification';

export const IssueIllustration = ({ illustration, isVisible }) => {
  const illustrationId = toKebabCase(illustration);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  switch (illustrationId) {
    case (CARBON_EMISSIONS_ILLUSTRATION):
      return (
        <Lottie
          options={{
            ...defaultOptions,
            animationData: emissionsAnimation,
          }}
          isStopped={!isVisible}
          isPaused={!isVisible}
        />
      );
    case (BIODIVERSITY_ILLUSTRATION):
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
    case (DROUGHT_ILLUSTRATION):
      return (
        <Lottie
          options={{
            ...defaultOptions,
            animationData: droughtAnimation,
          }}
          isStopped={!isVisible}
          isPaused={!isVisible}
        />
      );
    default:
      return null;
  }
};
