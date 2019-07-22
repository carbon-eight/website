import React from 'react';
import './ValleyScene.scss';

const ValleyScene = (props) => {
  const {
    isMobile,
  } = props;
  const stateClasses = `${isMobile ? ' mobile' : ''}`;
  return (
    <section className={`valley-scene${stateClasses}`} />
  );
};

export default ValleyScene;
