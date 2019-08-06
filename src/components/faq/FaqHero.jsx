import React from 'react';
import {
  Wrapper,
  CurlyDivider,
} from '../common';
import { COLOUR_TERTIARY, COLOUR_WHITE } from '../../util/colours';
import './FaqHero.scss';

export const FaqHero = (props) => {
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

export default FaqHero;
