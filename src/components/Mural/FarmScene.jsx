import React from 'react';
import './FarmScene.scss';

const FarmScene = (props) => {
  const {
    isMobile,
  } = props;
  const stateClasses = `${isMobile ? ' mobile' : ''}`;
  return (
    <section className={`farm-scene${stateClasses}`} />
  );
};

export default FarmScene;
