import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, HtmlContent } from '../common';
import { generateKey } from '../../util/helpers';
import './CallToActionsBlock.scss';

const CallToActionsBlock = (props) => {
  const {
    callToActions,
  } = props;
  return (
    <div className="call-to-actions-block">
      <Wrapper>
        <div className="call-to-actions">
          { callToActions && callToActions.map((block, index) => {
            const {
              label,
              title,
              description,
              buttonLabel,
              buttonLink,
            } = block;
            const {
              slug,
            } = buttonLink;
            return (
              <div className="call-to-action" key={generateKey(index)}>
                <span className="label">{label.text}</span>
                <h3>{title.text}</h3>
                <HtmlContent
                  content={description.html}
                />
                <Link
                  to={`/${slug}/`}
                  className="call-to-action-link"
                  aria-label={`Navigate to ${buttonLabel.text} page`}
                >
                  <span>{buttonLabel.text}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default CallToActionsBlock;
