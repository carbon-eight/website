import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { Layout, SubscribeForm } from '../components';
import { HomeMural } from '../components/Mural';
import {
  CarbonEightIntro,
  IssueBlocks,
  OutcomesDiagram,
  SectionIntro,
  SolutionBlocks,
  CallToActionsBlock,
} from '../components/Home';
import { COLOUR_WHITE, COLOUR_EARTH_EVEN_LIGHTER } from '../util/colours';
import {
  SMALL_MOBILE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../util/breakpoints';
import './index.scss';

const Index = (props) => {
  const isMobile = useMediaQuery({ maxWidth: `${MOBILE_BREAKPOINT}px` });
  const isSmallMobile = useMediaQuery({ maxWidth: `${SMALL_MOBILE_BREAKPOINT}px` });
  console.log({ isMobile });
  const {
    data: {
      page: {
        data: pageData,
      },
    },
    location,
  } = props;
  const {
    metaTitle,
    metaDescription,
    openGraphImage,
    carbonEightIntro,
    issuesHeadline,
    issuesIntro,
    issues,
    solutionsHeadline,
    solutionsIntro,
    solutions,
    outcomesHeadline,
    outcomesIntro,
    outcomes,
    callToActionsHeadline,
    callToActionsIntro,
    callToActions,
  } = pageData;
  const seoData = {
    metaTitle,
    metaDescription,
    openGraphImage,
  };
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Layout
      location={location}
      seoData={seoData}
      isSmallMobile={isSmallMobile}
    >
      <HomeMural
        isMobile={isMobile}
      />
      <div className="home-body" ref={ref}>
        <CarbonEightIntro
          intro={carbonEightIntro}
          isSmallMobile={isSmallMobile}
        />
        <SectionIntro
          label="The Problem"
          headline={issuesHeadline}
          intro={issuesIntro}
          topColor={COLOUR_EARTH_EVEN_LIGHTER}
          bottomColor={COLOUR_WHITE}
          isSmallMobile={isSmallMobile}
        />
        <IssueBlocks
          issues={issues}
          isMobile={isMobile}
          loadAnimations={inView}
        />
        <SectionIntro
          label="Our Solution"
          headline={solutionsHeadline}
          intro={solutionsIntro}
          topColor={COLOUR_WHITE}
          bottomColor={COLOUR_WHITE}
          isSmallMobile={isSmallMobile}
        />
        <SolutionBlocks
          solutions={solutions}
          isMobile={isMobile}
          loadAnimations={inView}
        />
        <SectionIntro
          label="Why It Matters"
          headline={outcomesHeadline}
          intro={outcomesIntro}
          topColor={COLOUR_WHITE}
          bottomColor={COLOUR_WHITE}
          isSmallMobile={isSmallMobile}
        />
        <OutcomesDiagram
          outcomes={outcomes}
          isMobile={isMobile}
          loadAnimations={inView}
        />
        <CallToActionsBlock
          label="Take Action"
          headline={callToActionsHeadline}
          intro={callToActionsIntro}
          callToActions={callToActions}
          isSmallMobile={isSmallMobile}
        />
        <SubscribeForm
          title="Join our community"
        />
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    page: prismicHome {
      uid,
      data {
        carbonEightIntro: carbon_eight_introduction {
          html
        }
        issuesHeadline: issues_headline {
          text
        }
        issuesIntro: issues_introduction {
          html
        }
        issues {
          title {
            text
          }
          description {
            html
          }
          illustration
        }
        solutionsHeadline: solutions_headline {
          text
        }
        solutionsIntro: solutions_introduction {
          html
        }
        solutions {
          title {
            text
          }
          illustration
          description {
            html
          }
        }
        outcomesHeadline: outcomes_headline {
          text
        }
        outcomesIntro: outcomes_introduction {
          html
        }
        outcomes {
          title {
            text
          }
          description {
            html
          }
          illustration
        }
        callToActionsHeadline: call_to_actions_headline {
          text
        }
        callToActionsIntro: call_to_actions_introduction {
          html
        }
        callToActions: call_to_actions {
          buttonLabel: button_label {
            text
          }
          buttonLink: button_link {
            slug
            type
            url
          }
          description {
            html
          }
          label {
            text
          }
          title {
            text
          }
        }
        metaTitle: meta_title {
          html
          text
        },
        metaDescription: meta_description {
          html
          text
        },
        openGraphImage: open_graph_image {
          alt
          copyright
          url
        }
      }
    }
  }
`;
