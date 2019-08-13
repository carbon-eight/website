import React from 'react';
import {
  Wrapper,
  HtmlContent,
  Image,
} from '../common';
import {
  ColourfulBackground,
  SubscribeForm,
} from '..';
import { SQUARE_BACKGROUND_TYPE } from '../ColourfulBackground';
import './NewsletterBlock.scss';

const NewsletterBlock = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
  } = data;
  const {
    label,
    title,
    description,
    photo,
  } = primary;
  return (
    <section className="newsletter-block">
      <Wrapper>
        <div className="container">
          <div className="col text-col">
            <div className="text-container">
              <span className="section-label">{label.text}</span>
              <h3 className="title">{title.text}</h3>
              <HtmlContent className="description" content={description.html} />
              <SubscribeForm />
            </div>
          </div>
          <div className="col image-col">
            <div className="image-container">
              <div className="colourful-background">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 536">
                  <path fill="#E8F4EF" fillRule="evenodd" d="M268.231 535.277c73.868 0 123.647-47.889 172.055-96.297 48.408-48.408 95.446-97.335 95.446-171.203 0-73.868.872-150.94-47.536-199.348C463.556 43.79 304.5.277 268.23.277c-73.868 0-113.506 74.518-161.914 122.926C57.909 171.61.731 193.909.731 267.777c0 73.868-9.377 134.092 39.031 182.5 48.408 48.408 154.601 85 228.47 85z" />
                </svg>
              </div>
              <div className="inner-image">
                <Image image={photo} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default NewsletterBlock;
