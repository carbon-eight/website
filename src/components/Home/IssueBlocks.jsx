import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Wrapper,
  HtmlContent,
} from '../common';
import { IssueIllustration } from './IssueIllustration';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './IssueBlocks.scss';

const IssueBlock = (props) => {
  const {
    title,
    description,
    illustration,
    index,
    loadAnimations,
  } = props;
  const styles = { transitionDelay: `${index * 1}s` };
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className="issue" ref={ref}>
      <div className={`illustration${loadAnimations ? ' visible' : ''}`}>
        <IssueIllustration
          illustration={illustration}
          isVisible={inView}
          loadAnimations={loadAnimations}
        />
      </div>
      <div className="text-container">
        <span className="count">{`Issue ${getNumberedAffix(index)}`}</span>
        <h3 className="title">
          <span className={inView ? 'visible' : ''} style={styles}>
            {title.text}
          </span>
        </h3>
        <HtmlContent
          content={description.html}
        />
      </div>
    </div>
  );
};

const IssueBlocks = (props) => {
  const {
    issues,
    loadAnimations,
  } = props;
  return (
    <div className="issue-blocks">
      <Wrapper>
        <div className="issues">
          { issues && issues.map((issue, index) => (
            <IssueBlock
              key={generateKey(index)}
              index={index}
              loadAnimations={loadAnimations}
              {...issue}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default IssueBlocks;
