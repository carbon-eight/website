import React from 'react';
import {
  Wrapper,
  CurlyDivider,
} from '../common';
import { COLOUR_TERTIARY, COLOUR_WHITE } from '../../util/colours';
import './Hero.scss';

export const Hero = (props) => {
  return (
    <section className="faq-hero">
      <div className="container">
        <Wrapper>
          <h1 className="title">Frequently Asked Questions</h1>
        </Wrapper>
      </div>
      <CurlyDivider
        topColor={COLOUR_TERTIARY}
        bottomColor={COLOUR_WHITE}
      />
    </section>
  );
};

export default Hero;
