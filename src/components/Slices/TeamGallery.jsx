import React from 'react';
import { Wrapper, ContentLink } from '../common';
import { TeamProfile } from '../About';
import './TeamGallery.scss';

const TeamGallery = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
    items: teamMembers,
  } = data;
  const {
    title,
    subtitle,
    buttonLink,
    buttonLabel,
  } = primary;
  const hasButton = Boolean(buttonLink || buttonLabel);
  return (
    <section className="team-gallery">
      <Wrapper>
        <div className="intro">
          <h2 className="title">{title.text}</h2>
          <p className="subtitle">{subtitle.text}</p>
          { hasButton && (
            <div className="actions">
              <ContentLink
                link={buttonLink}
                linkLabel={buttonLabel}
              />
            </div>
          )}
        </div>
        <div className="team-members">
          {teamMembers && teamMembers.map((member, index) => (
            <TeamProfile
              key={index}
              {...member}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default TeamGallery;
