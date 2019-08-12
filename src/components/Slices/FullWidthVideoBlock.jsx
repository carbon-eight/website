import React from 'react';
import { Wrapper, VideoBlock } from '../common';
import './FullWidthVideoBlock.scss';

const FullWidthVideoBlock = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
  } = data;
  const {
    title,
    videoProvider,
    videoUrl,
  } = primary;
  return (
    <section className="full-width-video-block">
      <Wrapper>
        <h2 className="title">{title.text}</h2>
        <VideoBlock
          videoProvider={videoProvider.toLowerCase()}
          videoUrl={videoUrl.url}
        />
      </Wrapper>
    </section>
  );
};

export default FullWidthVideoBlock;
