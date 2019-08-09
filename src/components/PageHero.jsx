import React from 'react';
import { Wrapper, CurlyDivider } from './common';
import { ENQUIRY_FORM_ID } from './Slices/EnquiryForm';
import { COLOUR_TERTIARY, COLOUR_WHITE } from '../util/colours';
import './PageHero.scss';

const scrollToForm = (event) => {
  if (event) event.preventDefault();
  const targetEl = document.getElementById(ENQUIRY_FORM_ID);
  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const PageHero = (props) => {
  const {
    title,
    subtitle,
  } = props;
  return (
    <section className="page-hero page-block">
      <div className="top">
        <Wrapper>
          <h1 className="title">{title}</h1>
          <span className="subtitle">{subtitle}</span>
          <button
            type="button"
            className="anchor-to-button cta-button"
            onClick={event => scrollToForm(event)}
            aria-label="Zoom down to the contact form"
          >
            <span>Get Started</span>
          </button>
        </Wrapper>
      </div>
      <CurlyDivider
        topColor={COLOUR_TERTIARY}
        bottomColor={COLOUR_WHITE}
      />
    </section>
  );
};

export default PageHero;
