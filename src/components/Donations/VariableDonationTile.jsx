import React from 'react';
import './VariableDonationTile.scss';
import './DonationTile.scss';

const VariableDonationTile = (props) => {
  const {
    active,
    animationStyles,
    donationType,
    illustrationType,
  } = props;
  const classNames = `donation-tile${active ? ' active' : ''}`;
  return (
    <div className={classNames} style={active ? animationStyles : null}>
      VariableDonationTile
    </div>
  );
};

export default VariableDonationTile;
