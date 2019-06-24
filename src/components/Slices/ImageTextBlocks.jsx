import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, Image } from '../common';
import './ImageTextBlocks.scss';

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
              link,
              linkLabel,
            } = block;
            return (
              <div className="image-text-block">
                <div className="col text-col">
                  <h3 className="block title">blockTitle</h3>
                  <p className="description">blockDescription</p>
                  <Link
                    to="/"
                    className="styled-button"
                    aria-label="Navigate to ..."
                  >
                    <span>{linkLabel}</span>
                  </Link>
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
