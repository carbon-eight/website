import React from 'react';
import { DonationTile, VariableDonationTile } from '.';
import './Tiles.scss';
import {
  ONCE_OFF_OPTION,
  VARIABLE_DONATION_SKU,
  DONATION_TYPE_VARIABLE,
} from './donation-constants';

const DonationTiles = (props) => {
  const {
    active,
    tiles,
  } = props;
  const className = `tiles donation-tiles${active ? ' active' : ''}`;
  const donationTiles = tiles.filter(tile => tile.id !== VARIABLE_DONATION_SKU);
  const variableTile = tiles.find(tile => tile.id === VARIABLE_DONATION_SKU);
  return (
    <div className={className}>
      {donationTiles && donationTiles.map((tile, index) => (
        <DonationTile
          active={active}
          styles={{ transitionDelay: (0.3 + (index * 0.2)) }}
          donationType={ONCE_OFF_OPTION}
          illustrationType={index}
          {...tile}
        />
      ))}
      {variableTile && (
        <VariableDonationTile
          active={active}
          styles={{ transitionDelay: (0.3 + ((donationTiles.length - 1) * 0.2)) }}
          donationType={ONCE_OFF_OPTION}
          illustrationType={DONATION_TYPE_VARIABLE}
          {...variableTile}
        />
      )}
    </div>
  );
};

export default DonationTiles;
