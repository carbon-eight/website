import React, { Component } from 'react';
import './Plyr.scss';

const isClient = typeof window !== 'undefined';

export default class Plyr extends Component {
  componentDidMount() {
    const options = {
      playsinline: true,
    };
    if (isClient) {
      this.plyr = require('plyr');
      this.player = this.plyr.setup('#plyr-player', options);
    }
  }

  componentWillUnmount() {
    if (isClient && this.player && this.player.length > 0) {
      for (const playerEl of this.player) { // eslint-disable-line
        playerEl.destroy();
      }
    }
  }

  render() {
    const { videoUrl, videoProvider } = this.props;
    if (!isClient) return null;
    return (
      <div
        id="plyr-player"
        data-plyr-provider={videoProvider}
        data-plyr-embed-id={videoUrl}
      />
    );
  }
}
