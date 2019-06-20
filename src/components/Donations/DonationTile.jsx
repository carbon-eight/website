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
    selectTileHandler,
  } = props;
  console.log('Props @ DonationTile', props);
  const classNames = `donation-tile${visible ? ' visible' : ''}`;
  const isRecurringDonation = donationType === RECURRING_OPTION;
  // const isOnceOffDonation = donationType === ONCE_OFF_OPTION;
  return (
    <div className={classNames} style={visible ? animationStyles : null}>
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
    </div>
  );
};

export default DonationTile;
