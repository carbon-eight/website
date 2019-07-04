import React from 'react';

const ParallaxElement = (props) => {
  const { children, parallaxSpeed } = props;
  return (
    <div className="parallax-element parallax" data-rellax-speed={parallaxSpeed}>
      {children}
    </div>
  );
};

export default ParallaxElement;
