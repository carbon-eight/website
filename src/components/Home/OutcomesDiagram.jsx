import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
    loadAnimations,
  } = props;
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOutcome = outcomes[activeIndex];
  return (
    <div className="outcomes-diagram">
      <div className="container">
        <Wrapper>
          <div className="diagram">
            <div className={`outcome-illustration${loadAnimations ? ' load-animations' : ''}`}>
              <div className="illustration-container" ref={ref}>
                <OutcomeIllustration
                  illustration={activeOutcome.illustration}
                  isVisible={inView}
                  loadAnimations={loadAnimations}
                />
              </div>
            </div>
            <div className="circle desktop-only">
              <OutcomeButtons
                outcomes={outcomes}
                activeIndex={activeIndex}
                setActiveIndexHandler={setActiveIndex}
              />
            </div>
            <div className="half-circle mobile-only">
              <OutcomeButtons
                outcomes={outcomes}
                activeIndex={activeIndex}
                setActiveIndexHandler={setActiveIndex}
              />
            </div>
            <div className="outcome-elaboration">
              <h3 className="title">
                <span className={inView ? 'visible' : ''}>
                  {activeOutcome.title.text}
                </span>
              </h3>
              <HtmlContent
                content={activeOutcome.description.html}
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default OutcomesDiagram;
