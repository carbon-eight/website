import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import { LegalPageHero, LegalPageBody } from '../components/Legal';
import {
  SMALL_MOBILE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../util/breakpoints';
import './information-page.scss';

const isClient = typeof window !== 'undefined';

class InformationPageTemplate extends Component {
  state = {
    viewportWidth: isClient ? window.innerWidth : 0,
  };

  componentDidMount() {
    if (isClient) {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }

  componentWillUnmount() {
    if (isClient) window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  }

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
      pageTitle,
      sections,
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    const {
      viewportWidth,
    } = this.state;
    const isMobile = Boolean(viewportWidth !== 0 && viewportWidth <= MOBILE_BREAKPOINT);
    const isSmallMobile = Boolean(viewportWidth !== 0 && viewportWidth <= SMALL_MOBILE_BREAKPOINT);
    return (
      <Layout
        location={location}
        seoData={seoData}
        isSmallMobile={isSmallMobile}
        solidHeader
      >
        <LegalPageHero
          title={pageTitle.text}
          isMobile={isMobile}
        />
        <LegalPageBody
          sections={sections}
          isMobile={isMobile}
        />
      </Layout>
    );
  }
}

export default InformationPageTemplate;

export const pageQuery = graphql`
  query InformationPageBySlug($uid: String!) {
    # site {
    #   siteMetadata {
    #     blogSlug,
    #   }
    # },
    page: prismicInformationPage(uid: { eq: $uid }) {
      data {
        pageTitle: page_name {
          text
        }
        sections {
          content {
            html
          }
          sectionHeading: section_heading {
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
