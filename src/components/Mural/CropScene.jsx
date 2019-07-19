import React from 'react';
import './CropScene.scss';

const CropScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}`;
  return (
    <section className={`crop-scene${stateClasses}`} />
  );
};

export default CropScene;
