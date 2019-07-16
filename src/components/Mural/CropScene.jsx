import React from 'react';
import './CropScene.scss';

const CropScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  return (
    <section className={`crop-scene${isSmallMobile ? ' mobile' : ''}`} />
  );
};

export default CropScene;
