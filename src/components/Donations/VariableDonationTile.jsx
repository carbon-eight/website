import React, { useRef } from 'react';
import AutosizeInput from 'react-input-autosize';
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
    variableAmount,
    setVariableAmountHandler,
  } = props;
  const inputRef = useRef();
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
      aria-label="hello"
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
                name="variable"
                type="number"
                value={variableAmount || ''}
                placeholder="100"
                maxLength="4"
                onChange={event => setVariableAmountHandler(event)}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default VariableDonationTile;
