import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, HtmlContent } from '../common';
import { SectionIntro } from '.';
import { COLOUR_WHITE } from '../../util/colours';
import './CallToActionsBlock.scss';

const CallToActionsBlock = (props) => {
  const {
    headline,
    intro,
    callToActions,
    isSmallMobile,
  } = props;
  return (
    <div className="call-to-actions-block">
      <SectionIntro
        label="Take Action"
        headline={headline}
        intro={intro}
        topColor={COLOUR_WHITE}
        bottomColor={COLOUR_WHITE}
        isSmallMobile={isSmallMobile}
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
              <Link
                key={index}
                className="call-to-action"
                to={`/${slug}/`}
                aria-label={`Navigate to ${buttonLabel.text} page`}
              >
                <div className="container">
                  <div className="text-container">
                    <span className="label">{label.text}</span>
                    <h3 className="title">{title.text}</h3>
                    <HtmlContent
                      content={description.html}
                    />
                  </div>
                  <div className="call-to-action-link cta-button">
                    <span>{buttonLabel.text}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default CallToActionsBlock;
