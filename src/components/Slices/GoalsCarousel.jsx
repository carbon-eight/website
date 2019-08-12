import React from 'react';
import { Wrapper } from '../common';

const GoalsCarousel = (props) => {
  const {
    data,
  } = props;
  // const {
  //   primary,
  // } = data;
  // const {
  //   title,
  // } = primary;
  console.log({ data });
  return (
    <section className="goals-carousel">
      <Wrapper>
        <span>GoalsCarousel</span>
      </Wrapper>
    </section>
  );
};

export default GoalsCarousel;
