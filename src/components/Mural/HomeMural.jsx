import React, { Component } from 'react';
import Rellax from 'rellax';
import {
  CropScene,
  FarmScene,
  SoilScene,
  RootsScene,
  ValleyScene,
  ParallaxElement,
} from '.';
import './HomeMural.scss';

class HomeMural extends Component {
  componentDidMount() {
    this.rellax = new Rellax('.parallax', {
      center: false,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }

  componentWillUnmount() {
    this.rellax.destroy();
  }

  render() {
    return (
      <div className="home-mural">
        <ParallaxElement parallaxSpeed={-7}>
          <ValleyScene />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={-5}>
          <FarmScene />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={-3}>
          <CropScene />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={-1}>
          <SoilScene />
          <RootsScene />
        </ParallaxElement>
      </div>
    );
  }
}

export default HomeMural;
