import React from 'react';
import { DonationIllustration } from './DonationIllustration';
import {
  RECURRING_OPTION,
  ONCE_OFF_OPTION,
} from './donation-constants';
import './DonationTile.scss';

const formatPrice = (amount) => {
  const amountDollars = (amount / 100).toFixed(0);
  return `$${amountDollars}`;
};

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
  // const isOnceOffDonation = donationType === ONCE_OFF_OPTION;
  return (
    <button
      type="button"
      className={classNames}
      onClick={event => selectTileHandler(event, id)}
      aria-label="hello"
      style={visible ? animationStyles : null}
    >
      <div className="container">
        <DonationIllustration
          illustrationType={illustrationType}
        />
        <div className="amount-container">
          <div className="inner-container">
            <div className="amount">
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
