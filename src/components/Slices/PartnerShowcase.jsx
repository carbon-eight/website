import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  Wrapper,
  Image,
} from '../common';
import { ColourfulBackground, ProgressDots } from '..';
import { SMALL_SQUARE_BACKGROUND_TYPE } from '../ColourfulBackground';
import './PartnerShowcase.scss';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

const Partner = ({ index, partner }) => {
  const {
    name,
    link,
    photo,
  } = partner;
  return (
    <div className="partner" key={generateKey(name.text)}>
      <div className="image-container">
        <ColourfulBackground
          index={index}
          backgroundType={SMALL_SQUARE_BACKGROUND_TYPE}
        />
        <div className="inner-image">
          <Image image={photo} />
        </div>
      </div>
      <div className="text-container">
        {link && link.url ? (
          <a className="name-container" href={link.url} target="_blank" rel="noopener noreferrer">
            <div className="link-icon">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g fill="#26C281" fillRule="nonzero">
                  <path d="M9.626 1.729h4.663L13.43.87v4.663c0 .22.096.451.25.607.15.15.393.26.608.25.22-.01.45-.082.607-.25a.89.89 0 0 0 .25-.607V3.961 1.446.87a.87.87 0 0 0-.857-.857H9.626a.893.893 0 0 0-.607.25.867.867 0 0 0-.25.607c.01.221.082.451.25.607.168.153.374.25.607.25z" />
                  <path d="M7.158 9.216l.77-.77a322511984.94 322511984.94 0 0 1 6.018-6.018c.313-.314.629-.622.94-.94l.013-.013a.882.882 0 0 0 .25-.607.874.874 0 0 0-.25-.607c-.163-.15-.377-.261-.607-.25a.9.9 0 0 0-.607.25l-.77.77-1.849 1.848L8.83 5.116 6.897 7.048c-.313.314-.629.623-.94.94l-.013.014a.882.882 0 0 0-.25.607c0 .21.092.461.25.607.163.15.377.26.607.25a.9.9 0 0 0 .607-.25z" />
                  <path d="M13.433 8.966V12.65c0 .202.015.411-.012.612l.03-.228c-.015.1-.04.194-.078.288l.086-.204a1.312 1.312 0 0 1-.158.273c.044-.059.089-.115.134-.173a1.35 1.35 0 0 1-.222.22l.174-.133a1.27 1.27 0 0 1-.273.158c.068-.03.137-.059.204-.086a1.28 1.28 0 0 1-.288.079l.228-.031c-.14.019-.286.012-.429.012H3.373c-.435 0-.87.003-1.305 0a1.2 1.2 0 0 1-.175-.012l.228.03a1.305 1.305 0 0 1-.288-.078l.204.086a1.312 1.312 0 0 1-.272-.158l.173.134a1.35 1.35 0 0 1-.221-.221c.044.058.089.114.133.173a1.27 1.27 0 0 1-.157-.273l.085.204a1.28 1.28 0 0 1-.079-.288l.031.228c-.019-.14-.012-.286-.012-.429v-.795-2.655-3.227-2.779c0-.435-.003-.87 0-1.305a1.2 1.2 0 0 1 .012-.175l-.03.228c.015-.099.04-.193.078-.288l-.085.204c.04-.097.094-.186.157-.272l-.133.173a1.35 1.35 0 0 1 .22-.221l-.172.134a1.27 1.27 0 0 1 .272-.158l-.204.086a1.28 1.28 0 0 1 .288-.08l-.228.031c.17-.022.347-.012.516-.012h3.782c.22 0 .45-.096.607-.25.15-.15.26-.393.25-.607-.01-.221-.082-.451-.25-.607a.89.89 0 0 0-.607-.25H2.54c-.16 0-.32-.002-.479 0a2.09 2.09 0 0 0-1.05.288C.845.397.678.527.55.676a1.978 1.978 0 0 0-.335.497c-.051.12-.108.24-.14.367a2.685 2.685 0 0 0-.064.424c-.003.034-.003.066-.003.1v10.457c0 .34-.012.672.05 1.008.068.379.293.76.567 1.025.143.138.307.266.486.352.12.058.245.113.373.153.132.04.273.054.409.07.1.012.202.012.303.012h10.891c.342-.004.647-.088.952-.235.347-.166.66-.482.842-.818.168-.31.257-.65.26-1.003.004-.515 0-1.03 0-1.544v-2.19-.392a.893.893 0 0 0-.25-.607.867.867 0 0 0-.607-.25c-.22.01-.45.082-.607.25a.947.947 0 0 0-.243.614z" />
                </g>
              </svg>
            </div>
            <span className="name">{name.text}</span>
          </a>
        ) : (
          <div className="name-container">
            <span className="name">{name.text}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const PartnerShowcase = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
    items: partners,
  } = data;
  const {
    title,
    subtitle,
  } = primary;
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: '20%',
        },
      },
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
    <section className="partner-showcase page-block">
      <Wrapper>
        <h2 className="block-title">{title.text}</h2>
        <p className="subtitle">{subtitle.text}</p>
        <div className="partners">
          <Slider {...settings}>
            { partners && partners.map((partner, index) => (
              <Partner
                index={index}
                partner={partner}
              />
            ))}
          </Slider>
          <ProgressDots
            numberOfDots={partners.length}
            activeDot={activeIndex + 1}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default PartnerShowcase;
