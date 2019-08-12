import React from 'react';
import { Wrapper } from '../common';

const FullWidthVideoBlock = (props) => {
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
    <section className="full-width-video-block">
      <Wrapper>
        <span>FullWidthVideoBlock</span>
      </Wrapper>
    </section>
  );
};

export default FullWidthVideoBlock;
