import React from 'react';
import {
  Lottie,
} from '../common';
import droughtAnimation from '../../assets/animations/issues/drought.json';
import emissionsAnimation from '../../assets/animations/issues/emissions.json';
import biodiversityAnimation from '../../assets/animations/issues/biodiversity.json';
import { toKebabCase } from '../../util/helpers';

const CARBON_EMISSIONS_ILLUSTRATION = 'carbon-emissions';
const BIODIVERSITY_ILLUSTRATION = 'reduction-of-biodiversity';
const DROUGHT_ILLUSTRATION = 'drought-and-desertification';

export const IssueIllustration = ({ illustration }) => {
  const illustrationId = toKebabCase(illustration);
  switch (illustrationId) {
    case (CARBON_EMISSIONS_ILLUSTRATION):
      return (
        <Lottie
          container="emissions-animation"
          animationData={emissionsAnimation}
          autoplay
          loop={false}
        />
      );
    case (BIODIVERSITY_ILLUSTRATION):
      return (
        <Lottie
          container="biodiversity-reduction-animation"
          animationData={biodiversityAnimation}
          autoplay
          loop={false}
        />
      );
    case (DROUGHT_ILLUSTRATION):
      return (
        <Lottie
          container="drought-animation"
          animationData={droughtAnimation}
          autoplay
          loop={false}
        />
      );
    default:
      return null;
  }
};
