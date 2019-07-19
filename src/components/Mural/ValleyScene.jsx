import React from 'react';
import './ValleyScene.scss';

const ValleyScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}`;
  return (
    <section className={`valley-scene${stateClasses}`} />
  );
};

export default ValleyScene;
