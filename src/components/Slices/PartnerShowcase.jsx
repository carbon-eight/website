import React from 'react';
import { Wrapper } from '../common';
import { PartnerList, PartnerCarousel } from '../Partners';
import './PartnerShowcase.scss';

const PartnerShowcase = (props) => {
  const {
    data,
    isSmallMobile,
  } = props;
  const {
    primary,
    items: partners,
  } = data;
  const {
    title,
    subtitle,
  } = primary;
  return (
    <section className="partner-showcase page-block">
      <Wrapper>
        <h2 className="block-title">{title.text}</h2>
        <p className="subtitle">{subtitle.text}</p>
        { isSmallMobile ? (
          <PartnerCarousel partners={partners} />
        ) : (
          <PartnerList partners={partners} />
        )}
      </Wrapper>
    </section>
  );
};

export default PartnerShowcase;
