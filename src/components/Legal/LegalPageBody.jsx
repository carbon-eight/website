import React from 'react';
import { Wrapper } from '../common';
import { LegalPageSection, LegalPageNavigation } from '.';
import './LegalPageBody.scss';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

const LegalPageBody = (props) => {
  const {
    sections,
  } = props;
  return (
    <section className="legal-page-body">
      <Wrapper>
        <div className="col col-left">
          <LegalPageNavigation
            sections={sections}
          />
        </div>
        <div className="col col-right">
          { sections && sections.map((section, index) => (
            <LegalPageSection
              key={generateKey(index)}
              index={index}
              section={section}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default LegalPageBody;
