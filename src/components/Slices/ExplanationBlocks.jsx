import React from 'react';
import { Wrapper, Image } from '../common';
import { ColourfulBackground } from '..';
import { SQUARE_BACKGROUND_TYPE } from '../ColourfulBackground';
import './ExplanationBlocks.scss';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

const ExplanationBlocks = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
    items: blocks,
  } = data;
  const {
    title,
  } = primary;
  const willScroll = Boolean(blocks.length > 3);
  return (
    <section className={`explanation-blocks page-block ${willScroll ? 'scroll' : ''}`}>
      <Wrapper>
        <h2 className="block-title">{title.text}</h2>
        <div className="blocks">
          { blocks && blocks.map((block, index) => {
            const {
              blockImage,
              blockTitle,
              description,
            } = block;
            const count = (index < 9) ? `0${index + 1}` : `${index + 1}`;
            return (
              <div className="block" key={generateKey(blockTitle.text)}>
                <div className="image-container">
                  <ColourfulBackground
                    index={index}
                    backgroundType={SQUARE_BACKGROUND_TYPE}
                  />
                  <div className="inner-image">
                    <Image image={blockImage} />
                  </div>
                </div>
                <div className="text-container">
                  <span className="count">{count}</span>
                  <h3 className="title">{blockTitle.text}</h3>
                  <p className="description">
                    {description.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default ExplanationBlocks;
