import React from 'react';
import {
  Image,
  HtmlContent,
} from '../common';
import './TeamProfile.scss';

const TeamProfile = (props) => {
  const {
    name,
    popUpMessage,
    profilePhoto,
    shortBio,
    title,
  } = props;
  return (
    <div className="team-profile">
      <div className="photo">
        <Image image={profilePhoto} />
      </div>
      <div className="text-container">
        <span className="job-title">{title.text}</span>
        <span className="name">{name.text}</span>
        {/* <HtmlContent className="bio" content={shortBio.html} /> */}
      </div>
    </div>
  );
};

export default TeamProfile;
