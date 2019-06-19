import React from 'react';
import { DonationTile } from '.';
import './Tiles.scss';

const SponsorshipTiles = (props) => {
  const {
    active,
    tiles,
  } = props;
  const className = `tiles sponsorship-tiles${active ? ' active' : ''}`;
  return (
    <div className={className}>
      {tiles && tiles.map((tile, index) => (
        <DonationTile
          active={active}
          styles={{ transitionDelay: (0.3 + (index * 0.2)) }}
          illustrationType={index}
          {...tile}
        />
      ))}
    </div>
  );
};

export default SponsorshipTiles;
