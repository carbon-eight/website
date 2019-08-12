import React from 'react';
import { Wrapper, ContentLink } from '../common';

const TeamGallery = (props) => {
  const {
    data,
  } = props;
  const {
    buttonLink,
    buttonLabel,
  } = data;
  // const {
  //   title,
  // } = primary;
  console.log({ data });
  const hasButton = Boolean(buttonLink || buttonLabel);
  return (
    <section className="team-gallery">
      <Wrapper>
        <span>TeamGallery</span>
        { hasButton && (
          <div className="actions">
            <ContentLink
              link={buttonLink}
              linkLabel={buttonLabel}
            />
          </div>
        )}
      </Wrapper>
    </section>
  );
};

export default TeamGallery;
