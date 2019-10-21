import React from 'react';
import { Wrapper } from '../common';
import { LegalPageSection, LegalPageNavigation } from '.';
import './LegalPageBody.scss';

const LegalPageBody = (props) => {
  const {
    sections,
    isMobile,
  } = props;
  return (
    <section className="legal-page-body">
      <Wrapper>
        <div className="col col-left">
          <LegalPageNavigation
            sections={sections}
            isMobile={isMobile}
          />
        </div>
        <div className="col col-right">
          { sections && sections.map((section, index) => (
            <LegalPageSection
              key={index}
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
