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
  state = {
    domLoading: true,
  };

  componentDidMount() {
    this.setState({
      domLoading: false,
    });
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
    const { domLoading } = this.state;
    return (
      <div className={`home-mural${isSmallMobile ? ' mobile' : ''}`}>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -2.25 : -7}>
          <ValleyScene
            domLoading={domLoading}
            isSmallMobile={isSmallMobile}
          />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -2 : -5}>
          <FarmScene
            domLoading={domLoading}
            isSmallMobile={isSmallMobile}
          />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={isSmallMobile ? -1.5 : -3}>
          <CropScene
            domLoading={domLoading}
            isSmallMobile={isSmallMobile}
          />
        </ParallaxElement>
        <ParallaxElement parallaxSpeed={isSmallMobile ? 0 : -1}>
          <SoilScene
            domLoading={domLoading}
            isSmallMobile={isSmallMobile}
          />
          <RootsScene
            domLoading={domLoading}
            isSmallMobile={isSmallMobile}
          />
        </ParallaxElement>
      </div>
    );
  }
}

export default HomeMural;
