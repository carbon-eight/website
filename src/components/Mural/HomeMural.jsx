import React from 'react';
import {
  CropScene,
  FarmScene,
  SoilScene,
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
    </div>
  );
};

export default HomeMural;
