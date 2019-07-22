import React from 'react';
import './RootsScene.scss';

const RootsScene = (props) => {
  const {
    isMobile,
  } = props;
  const stateClasses = `${isMobile ? ' mobile' : ''}`;
  return (
    <section className={`roots-scene${stateClasses}`} />
  );
};

export default RootsScene;
