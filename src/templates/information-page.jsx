import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import { LegalPageHero, LegalPageBody } from '../components/Legal';
import './information-page.scss';

const isClient = typeof window !== 'undefined';
const MOBILE_BREAKPOINT = 800;

class InformationPageTemplate extends Component {
  state = {
    viewportWidth: 0,
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
    const isMobile = Boolean(viewportWidth <= MOBILE_BREAKPOINT);
    return (
      <Layout location={location} seoData={seoData}>
        <LegalPageHero
          title={pageTitle.text}
          isMobile={isMobile}
        />
        <LegalPageBody
          sections={sections}
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
