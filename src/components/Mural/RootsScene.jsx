import React from 'react';
import './RootsScene.scss';

const RootsScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  return (
    <section className={`roots-scene${isSmallMobile ? ' mobile' : ''}`} />
  );
};

export default RootsScene;
