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
    return (
      <div className={`home-mural${isSmallMobile ? ' mobile' : ''}`}>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -2.25 : -7}>
          <ValleyScene
            isSmallMobile={isSmallMobile}
          />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -2 : -5}>
          <FarmScene
            isSmallMobile={isSmallMobile}
          />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -1.5 : -3}>
          <CropScene
            isSmallMobile={isSmallMobile}
          />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={isSmallMobile ? 0 : -1}>
          <SoilScene
            isSmallMobile={isSmallMobile}
          />
          <RootsScene
            isSmallMobile={isSmallMobile}
          />
        </ParallaxElement>
      </div>
    );
  }
}

export default HomeMural;
