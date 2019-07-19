import React from 'react';
import './FarmScene.scss';

const FarmScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}`;
  return (
    <section className={`farm-scene${stateClasses}`} />
  );
};

export default FarmScene;
