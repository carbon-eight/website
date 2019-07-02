import React from 'react';
import { Wrapper } from '../common';
import './LegalPageHero.scss';

const LegalPageHero = (props) => {
  const {
    title,
  } = props;
  return (
    <section className="legal-page-hero">
      <Wrapper>
        <h1>{title}</h1>
      </Wrapper>
    </section>
  );
};

export default LegalPageHero;
