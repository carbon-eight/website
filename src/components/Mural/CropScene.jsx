import React from 'react';
import './CropScene.scss';

const CropScene = (props) => {
  const {
    isMobile,
  } = props;
  const stateClasses = `${isMobile ? ' mobile' : ''}`;
  return (
    <section className={`crop-scene${stateClasses}`} />
  );
};

export default CropScene;
