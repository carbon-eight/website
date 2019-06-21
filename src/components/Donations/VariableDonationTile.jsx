import React, { useRef } from 'react';
import AutosizeInput from 'react-input-autosize';
import { DonationIllustration } from './DonationIllustration';
import './VariableDonationTile.scss';
import './DonationTile.scss';

const MIN_DONATION_VALUE = 1;
const MAX_DONATION_VALUE = 9999;

const VariableDonationTile = (props) => {
  const {
    id,
    visible,
    animationStyles,
    illustrationType,
    isSelected,
    selectTileHandler,
    variableAmount,
    setVariableAmountHandler,
  } = props;
  const inputRef = useRef();
  const validateVariableAmount = (event) => {
    const inputValue = event.target.value;
    if (inputValue !== '' && (inputValue < MIN_DONATION_VALUE || inputValue > MAX_DONATION_VALUE || inputValue === '-')) return null;
    setVariableAmountHandler(inputValue);
  };
  const selectVariableTileHandler = (event) => {
    inputRef.current.focus();
    selectTileHandler(event, id);
  };
  const classNames = `donation-tile variable-donation-tile${visible ? ' visible' : ''}${isSelected ? ' selected' : ''}`;
  return (
    <button
      type="button"
      className={classNames}
      onClick={event => selectVariableTileHandler(event)}
      aria-label="Select to nominate your own amount to donate"
      style={visible ? animationStyles : null}
    >
      <div className="container">
        <div className="illustration-container">
          <DonationIllustration
            illustrationType={illustrationType}
          />
        </div>
        <div className="amount-container">
          <div className="inner-container">
            <div className="amount">
              <span className="dollar">$</span>
              <AutosizeInput
                ref={inputRef}
                name="variable-donation"
                type="number"
                value={variableAmount || ''}
                placeholder="100"
                min={MIN_DONATION_VALUE}
                max={MAX_DONATION_VALUE}
                onChange={event => validateVariableAmount(event)}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default VariableDonationTile;
