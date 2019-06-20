import React from 'react';
import './ProgressDots.scss';

const ProgressDot = (props) => {
  const {
    active,
  } = props;
  return (
    <div className={`progress-dot ${active ? 'active' : ''}`} />
  );
};

const ProgressDots = (props) => {
  const {
    numberOfDots,
    activeDot,
  } = props;
  if (!numberOfDots || numberOfDots < 1) return null;
  const dots = [];
  for (let i = 0; i < numberOfDots; i++) { // eslint-disable-line
    dots.push(<ProgressDot key={i} active={i === (activeDot - 1)} />);
  }
  return (
    <div className="progress-dots">
      {dots}
    </div>
  );
};

export default ProgressDots;
