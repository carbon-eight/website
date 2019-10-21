import React from 'react';
import {
  Wrapper,
  HtmlContent,
  ContentLink,
  TiltImage,
} from '../common';
import { toKebabCase, getNumberedAffix } from '../../util/helpers';
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
          { blocks && blocks.map((block, index) => {
            const {
              blockImage,
              blockTitle,
              description,
              link,
              linkLabel,
            } = block;
            return (
              <div className="image-text-block" key={toKebabCase(blockTitle.text)}>
                <div className="col text-col">
                  <div className="container">
                    <span className="count">{getNumberedAffix(index)}</span>
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
                  <TiltImage
                    index={index}
                    inverted={index % 2 === 0}
                    image={blockImage}
                  />
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
