import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import { HomeMural } from '../components/Mural';
import {
  CarbonEightIntro,
  SectionIntro,
  IssueBlocks,
  SolutionBlocks,
  OutcomesDiagram,
  CallToActions,
} from '../components/Home';
import './index.scss';

class Index extends Component {
  render() {
    const {
      data: {
        page: {
          data: pageData,
        },
      },
      location,
    } = this.props;
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
    return (
      <Layout location={location} seoData={seoData}>
        <HomeMural />
        <CarbonEightIntro
          intro={carbonEightIntro}
        />
        <SectionIntro
          headline={issuesHeadline}
          intro={issuesHeadline}
        />
        <IssueBlocks
          issues={issues}
        />
        <SectionIntro
          headline={solutionsHeadline}
          intro={solutionsIntro}
        />
        <SolutionBlocks
          solutions={solutions}
        />
        <SectionIntro
          headline={outcomesHeadline}
          intro={outcomesIntro}
        />
        <OutcomesDiagram
          outcomes={outcomes}
        />
        <SectionIntro
          headline={callToActionsHeadline}
          intro={callToActionsIntro}
        />
        <CallToActions
          callToActions={callToActions}
        />
      </Layout>
    );
  }
}

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
