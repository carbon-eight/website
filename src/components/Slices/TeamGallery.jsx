import React from 'react';
import { Wrapper } from '../common';

const TeamGallery = (props) => {
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
    <section className="team-gallery">
      <Wrapper>
        <span>TeamGallery</span>
      </Wrapper>
    </section>
  );
};

export default TeamGallery;
