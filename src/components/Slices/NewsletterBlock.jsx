import React from 'react';
import {
  Wrapper,
  HtmlContent,
  Image,
} from '../common';
import {
  SubscribeForm,
} from '..';
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
              <span className="label">{label.text}</span>
              <h3 className="title">{title.text}</h3>
              <HtmlContent className="description" content={description.html} />
              <SubscribeForm />
            </div>
          </div>
          <div className="col image-col">
            <Image image={photo} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default NewsletterBlock;
