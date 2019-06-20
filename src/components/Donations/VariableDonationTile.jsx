import React from 'react';
import { DonationIllustration } from './DonationIllustration';
import './VariableDonationTile.scss';
import './DonationTile.scss';

const VariableDonationTile = (props) => {
  const {
    id,
    visible,
    animationStyles,
    illustrationType,
    isSelected,
    selectTileHandler,
  } = props;
  const classNames = `donation-tile${visible ? ' visible' : ''}${isSelected ? ' selected' : ''}`;
  return (
    <div className={classNames} style={visible ? animationStyles : null}>
      <div className="container">
        <div className="illustration-container">
          <DonationIllustration
            illustrationType={illustrationType}
          />
        </div>
        <div className="amount-container">
          <div className="inner-container">
            <div className="amount">
              <span className="price">$0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariableDonationTile;
