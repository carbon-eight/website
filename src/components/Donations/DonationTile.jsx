import React from 'react';
import { DonationIllustration } from './DonationIllustration';
import './DonationTile.scss';

const DonationTile = (props) => {
  const {
    active,
    animationStyles,
    donationType,
    illustrationType,
    selectTileHandler,
  } = props;
  const classNames = `donation-tile${active ? ' active' : ''}`;
  return (
    <div className={classNames} style={active ? animationStyles : null}>
      <DonationIllustration
        illustrationType={illustrationType}
      />
      <div className="amount-container">
        amount
      </div>
    </div>
  );
};

export default DonationTile;
