import React, { useState } from 'react';
import OnVisible from 'react-on-visible';
import { OutcomeIllustration } from './OutcomeIllustration';
import { OutcomeIcon } from './OutcomeIcon';
import { Wrapper, HtmlContent } from '../common';
import { generateKey } from '../../util/helpers';
import './OutcomesDiagram.scss';

const OutcomeButtons = ({ outcomes, activeIndex, setActiveIndexHandler }) => (
  <div className="outcome-buttons">
    { outcomes && outcomes.map((outcome, index) => (
      <button
        type="button"
        className={`outcome-selector ${activeIndex === index ? 'active' : ''}`}
        onClick={event => setActiveIndexHandler(index)} // eslint-disable-line
        aria-label={`Find out about ${outcome.title.text}`}
        key={generateKey(index)}
      >
        <div className="icon-container">
          <div className="icon">
            <OutcomeIcon icon={outcome.illustration} />
          </div>
        </div>
        <span className="hover-label">{outcome.title.text}</span>
      </button>
    ))}
  </div>
);

const OutcomesDiagram = (props) => {
  const {
    outcomes,
    isMobile,
  } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOutcome = outcomes[activeIndex];
  return (
    <div className="outcomes-diagram">
      { isMobile ? (
        <div className="diagram diagram-mobile">
          <div className="outcome-illustration">
            <OutcomeIllustration illustration={activeOutcome.illustration} />
          </div>
          <div className="half-circle">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 360 99">
              <defs>
                <path id="half-circle-a" d="M.924.5h360v100h-360z" />
              </defs>
              <g fill="none" fillRule="evenodd" transform="translate(-.924 -1.5)">
                <mask id="half-circle-b" fill="#fff">
                  <use xlinkHref="#half-circle-a" />
                </mask>
                <path fill="#E8F4EF" fillRule="nonzero" d="M-40-121c0 122.055 98.945 221 221 221S402 1.055 402-121h-3C399-.602 301.398 97 181 97S-37-.602-37-121h-3z" mask="url(#half-circle-b)" />
              </g>
            </svg>
            <OutcomeButtons
              outcomes={outcomes}
              activeIndex={activeIndex}
              setActiveIndexHandler={setActiveIndex}
            />
          </div>
          <div className="outcome-elaboration">
            <h3 className="title">
              <OnVisible wrappingElement="span">
                {activeOutcome.title.text}
              </OnVisible>
            </h3>
            <HtmlContent
              content={activeOutcome.description.html}
            />
          </div>
        </div>
      ) : (
        <Wrapper>
          <div className="diagram diagram-desktop">
            <div className="circle">
              <OutcomeButtons
                outcomes={outcomes}
                activeIndex={activeIndex}
                setActiveIndexHandler={setActiveIndex}
              />
              <div className="outcome-illustration">
                <OutcomeIllustration illustration={activeOutcome.illustration} />
              </div>
              <div className="outcome-elaboration">
                <h3 className="title">
                  <OnVisible wrappingElement="span">
                    {activeOutcome.title.text}
                  </OnVisible>
                </h3>
                <HtmlContent
                  content={activeOutcome.description.html}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default OutcomesDiagram;
