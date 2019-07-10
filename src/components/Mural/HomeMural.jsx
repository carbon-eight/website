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

const isClient = typeof window !== 'undefined';

class HomeMural extends Component {
  componentDidMount() {
    this.rellax = new Rellax('.parallax', {
      center: false,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }

  componentDidUpdate(prevProps) {
    const { isSmallMobile } = this.props;
    const { isSmallMobile: wasSmallMobile } = prevProps;
    if (isSmallMobile !== wasSmallMobile) {
      this.rellax.refresh();
    }
  }

  componentWillUnmount() {
    this.rellax.destroy();
  }

  render() {
    const { isSmallMobile } = this.props;
    console.log({ isSmallMobile });
    const valleyParallaxSpeed = isSmallMobile ? -2.25 : -7;
    const farmParallaxSpeed = isSmallMobile ? -2 : -5;
    const cropParallaxSpeed = isSmallMobile ? -1.5 : -3;
    const soilParallaxSpeed = isSmallMobile ? 0 : -1;
    return (
      <div className={`home-mural${isSmallMobile ? ' mobile' : ''}`}>
        <ParallaxElement parallaxSpeed={valleyParallaxSpeed}>
          <ValleyScene isSmallMobile={isSmallMobile} />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={farmParallaxSpeed}>
          <FarmScene isSmallMobile={isSmallMobile} />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={cropParallaxSpeed}>
          <CropScene isSmallMobile={isSmallMobile} />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={soilParallaxSpeed}>
          <SoilScene isSmallMobile={isSmallMobile} />
          <RootsScene isSmallMobile={isSmallMobile} />
        </ParallaxElement>
      </div>
    );
  }
}

export default HomeMural;
