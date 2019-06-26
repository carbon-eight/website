import React, { Component } from 'react';
import { DonationTile } from '.';
import {
  RECURRING_OPTION,
} from './donation-constants';
import './Tiles.scss';

class SponsorshipTiles extends Component {
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('load', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const {
      setTilesHeightHandler,
    } = this.props;
    const currentHeight = this.tilesRef.clientHeight;
    setTilesHeightHandler(currentHeight);
  };

  render() {
    const {
      visible,
      tiles,
      selectedDonationId,
      selectTileHandler,
    } = this.props;
    const className = `tiles sponsorship-tiles${visible ? ' visible' : ''}`;
    return (
      <div className={className} ref={(tilesRef) => { this.tilesRef = tilesRef; }}>
        {tiles && tiles.map((tile, index) => {
          const { id } = tile;
          const animationStyles = {
            transitionDelay: `${(0.3 + ((index + 1) * 0.2)).toFixed(1)}s`,
          };
          return (
            <DonationTile
              key={id}
              isSelected={selectedDonationId === id}
              visible={visible}
              animationStyles={animationStyles}
              donationType={RECURRING_OPTION}
              illustrationType={index}
              selectTileHandler={selectTileHandler}
              {...tile}
            />
          );
        })}
      </div>
    );
  }
}

export default SponsorshipTiles;
