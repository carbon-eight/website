import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import {
  Image,
  HtmlContent,
} from '../common';
import { isClient } from '../../util/helpers';
import './TeamProfile.scss';

const TeamProfile = (props) => {
  const {
    name,
    profilePhoto,
    shortBio,
    title,
  } = props;
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const resizeHandler = (newHeight) => {
      console.log('resizeHandler triggered!', newHeight);
      setHeight(newHeight);
    };
    resizeHandler(ref.current.clientHeight);
    window.addEventListener('resize', resizeHandler(ref.current.clientHeight), false);
    return () => {
      if (isClient) window.removeEventListener('resize', resizeHandler(ref.current.clientHeight), false);
    };
  });
  const clickHandler = (event) => {
    event.preventDefault();
    setClicked(!clicked);
  };
  const { transform, opacity } = useSpring({
    opacity: clicked ? 1 : 0,
    transform: clicked ? `perspective(1500px) rotateY(180deg)` : `perspective(1500px) rotateY(0deg)`,
    config: {
      duration: 300,
      mass: 5,
      tension: 500,
      friction: 80,
    },
    reset: false,
  });
  return (
    <button
      type="button"
      className="team-profile"
      style={{ height }}
      onClick={event => clickHandler(event)}
    >
      <animated.div
        className={`profile-front ${!clicked ? 'visible' : 'hidden'}`}
        ref={ref}
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      >
        <div className="photo">
          <Image image={profilePhoto} />
        </div>
        <div className="text-container">
          <span className="job-title">{title.text}</span>
          <span className="name">{name.text}</span>
        </div>
      </animated.div>
      <animated.div
        className={`profile-back ${clicked ? 'visible' : 'hidden'}`}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`),
          height,
        }}
      >
        <span className="job-title">{title.text}</span>
        <span className="name">{name.text}</span>
        <HtmlContent className="bio" content={shortBio.html} />
      </animated.div>
    </button>
  );
};

export default TeamProfile;
