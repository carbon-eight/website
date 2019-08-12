import React, { useState } from 'react';
import {
  Wrapper,
  HtmlContent,
  TiltImage,
} from '../common';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './GoalsCarousel.scss';

const GoalsCarousel = (props) => {
  const {
    data,
  } = props;
  const {
    items: goals,
  } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const changeGoal = (event, goalIndex) => {
    if (event) event.preventDefault();
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(goalIndex);
      setTimeout(() => {
        setAnimating(false);
      }, 500);
    }, 500);
  };
  const activeGoal = goals[activeIndex];
  return (
    <section className="goals-carousel">
      <Wrapper>
        <div className={`goal-block${animating ? ' is-animating' : ''}`}>
          <div className="col text-col">
            <div className="container">
              <span className="label">Our Goals</span>
              <div className="buttons">
                {goals && goals.map((goal, index) => (
                  <button
                    key={generateKey(index)}
                    type="button"
                    className="goal-button"
                    onClick={event => changeGoal(event, index)}
                    aria-label={`Check out to goal #${index}`}
                    disabled={animating}
                  >
                    {getNumberedAffix(index)}
                  </button>
                ))}
              </div>
              <h3 className="title">{activeGoal.goalTitle.text}</h3>
              <HtmlContent className="description" content={activeGoal.description.html} />
            </div>
          </div>
          <div className="col image-col">
            <TiltImage
              index={0}
              image={activeGoal.photo}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default GoalsCarousel;
