import React from 'react';
import { Wrapper, HtmlContent } from '../common';
import { generateKey, getNumberedAffix, toKebabCase } from '../../util/helpers';
import './IssueBlocks.scss';

const CARBON_EMISSIONS_ILLUSTRATION = 'carbon-emissions';
const BIODIVERSITY_ILLUSTRATION = 'reduction-of-biodiversity';
const DROUGHT_ILLUSTRATION = 'drought-and-desertification';

const IssueIllustration = ({ illustration }) => {
  const illustrationId = toKebabCase(illustration);
  switch (illustrationId) {
    case (CARBON_EMISSIONS_ILLUSTRATION):
      return null;
    case (BIODIVERSITY_ILLUSTRATION):
      return null;
    case (DROUGHT_ILLUSTRATION):
      return null;
    default:
      return null;
  }
};

const IssueBlocks = (props) => {
  const {
    issues,
  } = props;
  return (
    <div className="issue-blocks">
      <Wrapper>
        <div className="issues">
          { issues && issues.map((issue, index) => {
            const {
              title,
              description,
              illustration,
            } = issue;
            return (
              <div className="issue" key={generateKey(index)}>
                <div className="illustration">
                  <IssueIllustration illustration={illustration} />
                </div>
                <span className="count">{`Issue ${getNumberedAffix(index)}`}</span>
                <h3>{title.text}</h3>
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

export default IssueBlocks;
