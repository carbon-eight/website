import React from 'react';
import './RootsScene.scss';

const RootsScene = (props) => {
  const {
    domLoading,
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}${domLoading ? '' : ' loaded'}`;
  return (
    <section className={`roots-scene${stateClasses}`} />
  );
};

export default RootsScene;
