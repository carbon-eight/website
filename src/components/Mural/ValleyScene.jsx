import React from 'react';
import './ValleyScene.scss';

const ValleyScene = (props) => {
  const {
    domLoading,
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}${domLoading ? '' : ' loaded'}`;
  return (
    <section className={`valley-scene${stateClasses}`} />
  );
};

export default ValleyScene;
