import React, { useState } from 'react';
import Slider from 'react-slick';
import { ProgressDots } from '..';
import { PartnerItem } from '.';
import './PartnerCarousel.scss';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

const PartnerCarousel = (props) => {
  const {
    partners,
  } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          centerPadding: '15%',
        },
      },
    ],
    afterChange: index => setActiveIndex(index),
  };
  return (
    <div className="partner-carousel">
      <div className="partners">
        <Slider {...settings}>
          { partners && partners.map((partner, index) => (
            <PartnerItem
              key={generateKey(partner.name.text)}
              index={index}
              partner={partner}
            />
          ))}
        </Slider>
      </div>
      <ProgressDots
        numberOfDots={partners.length}
        activeDot={activeIndex + 1}
      />
    </div>
  );
};

export default PartnerCarousel;
