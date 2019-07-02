import React from 'react';
import { PartnerItem } from '.';
import './PartnerList.scss';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

const PartnerList = (props) => {
  const {
    partners,
  } = props;
  return (
    <div className="partner-list">
      <div className="partners">
        { partners && partners.map((partner, index) => (
          <PartnerItem
            key={generateKey(partner.name.text)}
            index={index}
            partner={partner}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
