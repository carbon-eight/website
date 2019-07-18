import React, { Component } from 'react';
import lottie from 'lottie-web';

export default class Lottie extends Component {
  componentDidMount() {
    const {
      getInstance = () => {},
      animationData,
      container,
      autoplay = true,
      loop = true,
    } = this.props;
    const lottieInstance = lottie.loadAnimation({
      container: document.getElementById(container),
      renderer: 'svg',
      loop,
      autoplay,
      animationData,
    });
    getInstance(lottieInstance);
  }

  render() {
    const { container, className } = this.props;
    return <div id={container} className={`animation${className ? ` ${className}` : ''}`} />;
  }
}
