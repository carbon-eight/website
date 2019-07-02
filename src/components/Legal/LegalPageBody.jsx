import React from 'react';
import { Wrapper } from '../common';
import { LegalPageSection } from '.';
import './LegalPageBody.scss';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

const LegalPageBody = (props) => {
  const {
    sections,
  } = props;
  return (
    <section className="legal-page-body">
      <Wrapper>
        { sections && sections.map((section, index) => (
          <LegalPageSection
            key={generateKey(index)}
            index={index}
            section={section}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default LegalPageBody;
