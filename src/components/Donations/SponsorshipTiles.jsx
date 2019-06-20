import React from 'react';
import { DonationTile } from '.';
import {
  RECURRING_OPTION,
} from './donation-constants';
import './Tiles.scss';

const SponsorshipTiles = (props) => {
  const {
    visible,
    tiles,
    selectedDonationOption,
    selectTileHandler,
  } = props;
  const className = `tiles sponsorship-tiles${visible ? ' active' : ''}`;
  return (
    <div className={className}>
      {tiles && tiles.map((tile, index) => {
        const { id } = tile;
        console.log({ id });
        const animationStyles = {
          transitionDelay: `${(0.3 + ((index + 1) * 0.2)).toFixed(1)}s`,
        };
        return (
          <DonationTile
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
};

export default SponsorshipTiles;
