import React from 'react';
import {
  Wrapper,
  Image,
  HtmlContent,
  ContentLink,
} from '../common';
import './ImageTextBlocks.scss';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

const ImageTextBlocks = (props) => {
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
  return (
    <section className="image-text-blocks page-block">
      <Wrapper>
        <h2 className="block-title">{title.text}</h2>
        <div className="blocks">
          { blocks && blocks.map((block) => {
            const {
              blockImage,
              blockTitle,
              description,
              link,
              linkLabel,
            } = block;
            return (
              <div className="image-text-block" key={generateKey(blockTitle.text)}>
                <div className="col text-col">
                  <h3 className="block title">{blockTitle.text}</h3>
                  <HtmlContent className="description" content={description.html} />
                  <ContentLink
                    link={link}
                    linkLabel={linkLabel}
                  />
                </div>
                <div className="col image-col">
                  <div className="image-container">
                    <Image image={blockImage} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default ImageTextBlocks;
