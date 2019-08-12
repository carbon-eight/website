import React from 'react';
import {
  Wrapper,
  HtmlContent,
  VideoBlock,
  CurlyDivider,
} from '../common';
import './TextAndVideoBlock.scss';
import { COLOUR_TERTIARY, COLOUR_WHITE } from '../../util/colours';

const TextAndVideoBlock = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
  } = data;
  const {
    title,
    headline,
    description,
    videoProvider,
    videoUrl,
  } = primary;
  return (
    <>
      <CurlyDivider
        topColor={COLOUR_WHITE}
        bottomColor={COLOUR_TERTIARY}
      />
      <section className="text-and-video-block">
        <Wrapper>
          <div className="container">
            <div className="col video-col">
              <VideoBlock
                videoProvider={videoProvider.toLowerCase()}
                videoUrl={videoUrl.url}
              />
            </div>
            <div className="col text-col">
              <div className="text-container">
                <span className="label">{headline.text}</span>
                <h2 className="title">{title.text}</h2>
                <HtmlContent className="description" content={description.html} />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <CurlyDivider
        topColor={COLOUR_TERTIARY}
        bottomColor={COLOUR_WHITE}
      />
    </>
  );
};

export default TextAndVideoBlock;
