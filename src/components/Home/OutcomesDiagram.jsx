import React from 'react';
import { OutcomeIllustration } from './OutcomeIllustration';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './OutcomesDiagram.scss';

const OutcomesDiagram = (props) => {
  const {
    outcomes,
  } = props;
  return (
    <div className="outcomes-diagram">
      <Wrapper>
        <div className="outcomes">
          { outcomes && outcomes.map((outcome, index) => {
            const {
              title,
              description,
              illustration,
            } = outcome;
            return (
              <div className="outcome" key={generateKey(index)}>
                <div className="illustration">
                  <OutcomeIllustration illustration={illustration} />
                </div>
                <span className="count">{`Outcome ${getNumberedAffix(index)}`}</span>
                <h3 className="title">{title.text}</h3>
                <HtmlContent
                  content={description.html}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default OutcomesDiagram;
