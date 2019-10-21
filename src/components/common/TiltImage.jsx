import React from 'react';
import Tilt from 'react-tilt';
import { Image } from '.';
import { ColourfulBackground } from '..';
import { RECT_BACKGROUND_TYPE } from '../ColourfulBackground';
import './TiltImage.scss';

const TiltImage = ({ image, index, inverted }) => {
  const tiltOptions = {
    reverse: true, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03, .98, .52, .99)', // Easing on enter/exit.
  };
  return (
    <Tilt
      className={`tilt-image${inverted ? ' inverted' : ''}`}
      options={tiltOptions}
    >
      <ColourfulBackground
        index={index}
        backgroundType={RECT_BACKGROUND_TYPE}
        inverted={inverted}
      />
      <div className="image-container">
        <Image image={image} />
      </div>
    </Tilt>
  );
};

export default TiltImage;
