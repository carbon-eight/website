import React from 'react';
import { DonationIllustration } from './DonationIllustration';
import {
  RECURRING_OPTION,
} from './donation-constants';
import './DonationTile.scss';

const formatPrice = amount => (amount / 100).toFixed(0);

const DonationTile = (props) => {
  const {
    id,
    price,
    visible,
    animationStyles,
    donationType,
    illustrationType,
    isSelected,
    selectTileHandler,
  } = props;
  const classNames = `donation-tile${visible ? ' visible' : ''}${isSelected ? ' selected' : ''}`;
  const isRecurringDonation = donationType === RECURRING_OPTION;
  const ariaLabel = `Select to donate $${formatPrice(price)}${isRecurringDonation ? ' per month' : ''}`;
  return (
    <button
      type="button"
      className={classNames}
      onClick={event => selectTileHandler(event, id)}
      aria-label={ariaLabel}
      style={visible ? animationStyles : null}
    >
      <div className="button-container">
        <DonationIllustration
          illustrationType={illustrationType}
        />
        <div className="amount-container">
          <div className="inner-container">
            <div className="amount">
              <span className="dollar">$</span>
              <span className="price">{formatPrice(price)}</span>
              { isRecurringDonation && <span className="frequency">/ Month</span> }
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DonationTile;
