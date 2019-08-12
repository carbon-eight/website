import React from 'react';
import { Wrapper } from '../common';

const FoundersGallery = (props) => {
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
    <section className="founders-gallery">
      <Wrapper>
        <span>FoundersGallery</span>
      </Wrapper>
    </section>
  );
};

export default FoundersGallery;
