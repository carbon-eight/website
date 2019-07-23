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
  // componentDidMount() {
  //   this.rellax = new Rellax('.parallax', {
  //     center: false,
  //     round: true,
  //     vertical: true,
  //     horizontal: false,
  //   });
  // }
  //
  // componentDidUpdate(prevProps) {
  //   const { isMobile } = this.props;
  //   const { isMobile: wasMobile } = prevProps;
  //   if (isMobile !== wasMobile) {
  //     this.rellax.refresh();
  //   }
  // }
  //
  // componentWillUnmount() {
  //   this.rellax.destroy();
  // }

  render() {
    const { isMobile } = this.props;
    return (
      <div className={`home-mural${isMobile ? ' mobile' : ''}`}>
        <div className="mural-components">
          <ParallaxElement parallaxSpeed={isMobile ? -2.25 : -7}>
            <ValleyScene
              isMobile={isMobile}
            />
          </ParallaxElement>
          <ParallaxElement parallaxSpeed={isMobile ? -2 : -5}>
            <FarmScene
              isMobile={isMobile}
            />
          </ParallaxElement>
          <ParallaxElement parallaxSpeed={isMobile ? -1.5 : -3}>
            <CropScene
              isMobile={isMobile}
            />
          </ParallaxElement>
          <ParallaxElement parallaxSpeed={isMobile ? 0 : -1}>
            <SoilScene
              isMobile={isMobile}
            />
            <RootsScene
              isMobile={isMobile}
            />
          </ParallaxElement>
        </div>
      </div>
    );
  }
}

export default HomeMural;
