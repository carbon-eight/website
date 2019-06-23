import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, Image } from '../common';
import './ImageTextBlocks.scss';

const ImageTextBlocks = (props) => {
  const {
    someProp,
  } = props;
  return (
    <section className="image-text-block">
      <Wrapper>
        <div className="container">
          <div className="col image-col">
            <div className="image-container">
              {/* <Image image={featuredImage} /> */}
            </div>
          </div>
          <div className="col text-col">
            <h3 className="block title">blockTitle</h3>
            <p className="description">blockDescription</p>
            <Link
              to="/"
              className="styled-button"
              aria-label="Navigate to ..."
            >
              <span>I'm a link</span>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ImageTextBlocks;
