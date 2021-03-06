import React from 'react';
import { Wrapper, Image } from '../common';
import { ColourfulBackground } from '..';
import { getNumberedAffix } from '../../util/helpers';
import { SQUARE_BACKGROUND_TYPE } from '../ColourfulBackground';
import './ExplanationBlocks.scss';

const Block = ({ block, index }) => {
  const {
    blockImage,
    blockTitle,
    description,
  } = block;
  return (
    <div className="block">
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
        <span className="count">{getNumberedAffix(index)}</span>
        <h3 className="title">{blockTitle.text}</h3>
        <p className="description">
          {description.text}
        </p>
      </div>
    </div>
  );
};

const ExplanationBlocks = (props) => {
  const {
    data,
    isMobile,
  } = props;
  const {
    primary,
    items: blocks,
  } = data;
  const {
    title,
  } = primary;
  const willScroll = Boolean(blocks.length > 3) || isMobile;
  return (
    <section className={`explanation-blocks page-block ${willScroll ? 'scroll' : ''}`}>
      <Wrapper>
        <h2 className="block-title">{title.text}</h2>
        <div className="blocks">
          { blocks && blocks.map((block, index) => (
            <Block
              key={index}
              index={index}
              block={block}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ExplanationBlocks;
