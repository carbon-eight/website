import React from 'react';
import { Wrapper, VideoBlock } from '../common';
import { isClient } from '../../util/helpers';

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
        <VideoBlock
          videoProvider={videoProvider.toLowerCase()}
          videoUrl={videoUrl.url}
        />
      </Wrapper>
    </section>
  );
};

export default FullWidthVideoBlock;
