import React from 'react';
import {
  CropScene,
  FarmScene,
  SoilScene,
  RootsScene,
  ValleyScene,
} from '.';
import './HomeMural.scss';

const HomeMural = (props) => {
  const {
    someProp,
  } = props;
  return (
    <div className="home-mural">
      <ValleyScene />
      <FarmScene />
      <CropScene />
      <SoilScene />
      <RootsScene />
    </div>
  );
};

export default HomeMural;
