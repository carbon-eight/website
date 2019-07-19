import React from 'react';
import './RootsScene.scss';

const RootsScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}`;
  return (
    <section className={`roots-scene${stateClasses}`} />
  );
};

export default RootsScene;
