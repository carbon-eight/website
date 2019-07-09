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
    const { isSmallMobile } = this.props;
    return (
      <div className={`home-mural${isSmallMobile ? ' mobile' : ''}`}>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -4 : -7}>
          <ValleyScene isSmallMobile={isSmallMobile} />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -3 : -5}>
          <FarmScene isSmallMobile={isSmallMobile} />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -2 : -3}>
          <CropScene isSmallMobile={isSmallMobile} />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={2}>
          <SoilScene isSmallMobile={isSmallMobile} />
          <RootsScene isSmallMobile={isSmallMobile} />
        </ParallaxElement>
      </div>
    );
  }
}

export default HomeMural;
