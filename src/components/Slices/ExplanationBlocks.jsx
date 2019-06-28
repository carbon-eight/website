import React from 'react';
import { Wrapper, Image } from '../common';
import { ColourfulBackground } from '..';
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
  console.log({ data });
  const {
    title,
  } = primary;
  return (
    <section className="explanation-blocks page-block">
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
                    square
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
