import React from 'react';
import { Wrapper } from '../common';

const TextAndVideoBlock = (props) => {
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
    <section className="text-and-video-block">
      <Wrapper>
        <span>TextAndVideoBlock</span>
      </Wrapper>
    </section>
  );
};

export default TextAndVideoBlock;
