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
    visible,
    tiles,
    selectTileHandler,
    selectedDonationId,
  } = props;
  const className = `tiles donation-tiles${visible ? ' visible' : ''}`;
  const donationTiles = tiles.filter(tile => tile.id !== VARIABLE_DONATION_SKU);
  const variableTile = tiles.find(tile => tile.id === VARIABLE_DONATION_SKU);
  return (
    <div className={className}>
      {donationTiles && donationTiles.map((tile, index) => {
        const { id } = tile;
        const animationStyles = {
          transitionDelay: `${(0.3 + ((index + 1) * 0.2)).toFixed(1)}s`,
        };
        return (
          <DonationTile
            key={id}
            visible={visible}
            isSelected={selectedDonationId === id}
            animationStyles={animationStyles}
            donationType={ONCE_OFF_OPTION}
            illustrationType={index}
            selectTileHandler={selectTileHandler}
            {...tile}
          />
        );
      })}
      {variableTile && (
        <VariableDonationTile
          isSelected={selectedDonationId === VARIABLE_DONATION_SKU}
          visible={visible}
          animationStyles={{
            transitionDelay: `${(0.3 + ((donationTiles.length + 1) * 0.2)).toFixed(1)}s`,
          }}
          donationType={ONCE_OFF_OPTION}
          illustrationType={DONATION_TYPE_VARIABLE}
          selectTileHandler={selectTileHandler}
          {...variableTile}
        />
      )}
    </div>
  );
};

export default DonationTiles;
