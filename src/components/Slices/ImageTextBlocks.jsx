import React from 'react';
import Tilt from 'react-tilt';
import {
  Wrapper,
  Image,
  HtmlContent,
  ContentLink,
} from '../common';
import { ColourfulBackground } from '..';
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
  const tiltOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 6000, // Speed of the enter/exit transition
    transition: false, // Set a transition on enter/exit.
    axis: 'X', // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03, .98, .52, .99)', // Easing on enter/exit.
  };
  return (
    <section className="image-text-blocks page-block">
      <Wrapper>
        <h2 className="block-title">{title.text}</h2>
        <div className="blocks">
          { blocks && blocks.map((block, index) => {
            const {
              blockImage,
              blockTitle,
              description,
              link,
              linkLabel,
            } = block;
            const count = (index < 9) ? `0${index + 1}` : `${index + 1}`;
            return (
              <div className="image-text-block" key={generateKey(blockTitle.text)}>
                <div className="col text-col">
                  <div className="container">
                    <span className="count">{count}</span>
                    <h3 className="title">{blockTitle.text}</h3>
                    <HtmlContent className="description" content={description.html} />
                    <div className="actions">
                      <ContentLink
                        link={link}
                        linkLabel={linkLabel}
                      />
                    </div>
                  </div>
                </div>
                <div className="col image-col">
                  <Tilt className="container" options={tiltOptions}>
                    <ColourfulBackground
                      index={index}
                      inverted={Boolean(index % 2 === 0)}
                    />
                    <div className="image-container">
                      <Image image={blockImage} />
                    </div>
                  </Tilt>
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
