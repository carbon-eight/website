import React from 'react';
import './FarmScene.scss';

const FarmScene = (props) => {
  const {
    domLoading,
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}${domLoading ? '' : ' loaded'}`;
  return (
    <section className={`farm-scene${stateClasses}`} />
  );
};

export default FarmScene;
