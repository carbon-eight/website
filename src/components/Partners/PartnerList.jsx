import React from 'react';
import { PartnerItem } from '.';
import './PartnerList.scss';
import { toKebabCase } from '../../util/helpers';

const PartnerList = (props) => {
  const {
    partners,
  } = props;
  return (
    <div className="partner-list">
      <div className="partners">
        { partners && partners.map((partner, index) => (
          <PartnerItem
            key={toKebabCase(partner.name.text)}
            index={index}
            partner={partner}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
