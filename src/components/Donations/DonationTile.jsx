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
      DonationTile
    </div>
  );
};

export default DonationTile;
