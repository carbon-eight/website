import React from 'react';
import { DonationIllustration } from './DonationIllustration';
import './DonationTile.scss';

const DonationTile = (props) => {
  const {
    active,
    animationStyles,
    donationType,
    illustrationType,
  } = props;
  const classNames = `donation-tile${active ? ' active' : ''}`;
  return (
    <div className={classNames} style={active ? animationStyles : null}>
      <div className="illustration-container">
        <DonationIllustration
          illustrationType={illustrationType}
        />
      </div>
      <div className="amount-container">
        amount
      </div>
    </div>
  );
};

export default DonationTile;
