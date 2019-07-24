import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Wrapper, HtmlContent } from '../common';
import { SolutionIllustration } from './SolutionIllustration';
import { generateKey, getNumberedAffix } from '../../util/helpers';
import './SolutionBlocks.scss';

const SolutionBlock = (props) => {
  const {
    title,
    description,
    illustration,
    index,
    loadAnimations,
  } = props;
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className="solution" ref={ref}>
      <div className="col image-col">
        <div className={`illustration${loadAnimations ? ' load-animations' : ''}`}>
          <SolutionIllustration
            illustration={illustration}
            isVisible={inView}
            loadAnimations={loadAnimations}
          />
        </div>
      </div>
      <div className="col text-col">
        <div className="text-container">
          <span className="count">{`Technique ${getNumberedAffix(index)}`}</span>
          <h3 className="title">
            <span className={inView ? 'visible' : ''}>
              {title.text}
            </span>
          </h3>
          <HtmlContent
            content={description.html}
          />
        </div>
      </div>
    </div>
  );
};

const SolutionBlocks = (props) => {
  const {
    solutions,
    loadAnimations,
  } = props;
  return (
    <div className="solution-blocks">
      <Wrapper>
        <div className="solutions">
          { solutions && solutions.map((solution, index) => (
            <SolutionBlock
              key={generateKey(index)}
              index={index}
              loadAnimations={loadAnimations}
              {...solution}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default SolutionBlocks;
