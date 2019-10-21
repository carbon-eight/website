import React from 'react';
import {
  Wrapper,
  VideoBlock,
  CurlyDivider,
} from '../common';
import { COLOUR_TERTIARY, COLOUR_WHITE } from '../../util/colours';
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
    <>
      <CurlyDivider
        topColor={COLOUR_WHITE}
        bottomColor={COLOUR_TERTIARY}
      />
      <section className="full-width-video-block">
        <Wrapper>
          <h2 className="title">{title.text}</h2>
          <VideoBlock
            videoProvider={videoProvider.toLowerCase()}
            videoUrl={videoUrl.url}
          />
        </Wrapper>
      </section>
      <CurlyDivider
        topColor={COLOUR_TERTIARY}
        bottomColor={COLOUR_WHITE}
      />
    </>
  );
};

export default FullWidthVideoBlock;
