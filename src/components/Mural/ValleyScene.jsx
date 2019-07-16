import React from 'react';
import './ValleyScene.scss';

const ValleyScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  return (
    <section className={`valley-scene${isSmallMobile ? ' mobile' : ''}`} />
  );
};

export default ValleyScene;
