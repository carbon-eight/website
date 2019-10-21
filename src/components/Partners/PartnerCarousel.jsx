import React, { useState } from 'react';
import Slider from 'react-slick';
import { ProgressDots } from '..';
import { PartnerItem } from '.';
import { toKebabCase } from '../../util/helpers';
import './PartnerCarousel.scss';

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
    centerPadding: '15%',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          centerPadding: '10%',
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
              key={toKebabCase(partner.name.text)}
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
