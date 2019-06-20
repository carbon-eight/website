import React from 'react';
import { DonationTile } from '.';
import './Tiles.scss';

const SponsorshipTiles = (props) => {
  const {
    active,
    tiles,
    selectTileHandler,
  } = props;
  const className = `tiles sponsorship-tiles${active ? ' active' : ''}`;
  return (
    <div className={className}>
      {tiles && tiles.map((tile, index) => (
        <DonationTile
          active={active}
          animationStyles={{
            transitionDelay: `${(0.3 + ((index + 1) * 0.2)).toFixed(1)}s`,
          }}
          illustrationType={index}
          selectTileHandler={selectTileHandler}
          {...tile}
        />
      ))}
    </div>
  );
};

export default SponsorshipTiles;
