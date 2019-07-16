import React from 'react';
import './FarmScene.scss';

const FarmScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  return (
    <section className={`farm-scene${isSmallMobile ? ' mobile' : ''}`} />
  );
};

export default FarmScene;
