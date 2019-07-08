import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, HtmlContent } from '../common';
import { SectionIntro } from '.';
import { COLOUR_WHITE } from '../../util/colours';
import { generateKey } from '../../util/helpers';
import './CallToActionsBlock.scss';

const CallToActionsBlock = (props) => {
  const {
    headline,
    intro,
    callToActions,
  } = props;
  return (
    <div className="call-to-actions-block">
      <SectionIntro
        label="Take Action"
        headline={headline}
        intro={intro}
        topColor={COLOUR_WHITE}
        bottomColor={COLOUR_WHITE}
      />
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
                <div className="container">
                  <span className="label">{label.text}</span>
                  <h3 className="title">{title.text}</h3>
                  <HtmlContent
                    content={description.html}
                  />
                  <Link
                    to={`/${slug}/`}
                    className="call-to-action-link cta-button"
                    aria-label={`Navigate to ${buttonLabel.text} page`}
                  >
                    <span>{buttonLabel.text}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default CallToActionsBlock;
