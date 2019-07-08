import React, { useState } from 'react';
import { OutcomeIllustration } from './OutcomeIllustration';
import { OutcomeIcon } from './OutcomeIcon';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './OutcomesDiagram.scss';

const OutcomesDiagram = (props) => {
  const {
    outcomes,
  } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOutcome = outcomes[activeIndex];
  return (
    <div className="outcomes-diagram">
      <Wrapper>
        <div className="diagram">
          <div className="circle">
            <div className="outcome-buttons">
              { outcomes && outcomes.map((outcome, index) => (
                <button
                  type="button"
                  className={`outcome-selector ${activeIndex === index ? 'active' : ''}`}
                  onClick={event => setActiveIndex(index)}
                  aria-label={`Find out about ${outcome.title.text}`}
                >
                  <div className="icon">
                    <OutcomeIcon icon={outcome.illustration} />
                  </div>
                </button>
              ))}
            </div>
            <div className="outcome-illustration">
              <OutcomeIllustration illustration={activeOutcome.illustration} />
            </div>
            <div className="outcome-elaboration">
              <h3 className="title">{activeOutcome.title.text}</h3>
              <HtmlContent
                content={activeOutcome.description.html}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OutcomesDiagram;
