import React from 'react';
import { Wrapper } from '../common';
import { TeamProfile } from '../About';
import { generateKey } from '../../util/helpers';
import './FoundersGallery.scss';

const FoundersGallery = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
    items: teamMembers,
  } = data;
  const {
    title,
  } = primary;
  return (
    <section className="founders-gallery">
      <Wrapper>
        <h2 className="title">{title.text}</h2>
        <div className="team-members">
          {teamMembers && teamMembers.map((member, index) => (
            <TeamProfile
              key={generateKey(index)}
              {...member}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default FoundersGallery;
