import React from 'react';
import './CropScene.scss';

const CropScene = (props) => {
  const {
    domLoading,
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}${domLoading ? '' : ' loaded'}`;
  return (
    <section className={`crop-scene${stateClasses}`} />
  );
};

export default CropScene;
