import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import { LegalPageHero, LegalPageBody } from '../components/Legal';
import './information-page.scss';

class InformationPageTemplate extends Component {
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
    console.log('this.props', this.props);
    return (
      <Layout location={location} seoData={seoData}>
        <LegalPageHero
          title={pageTitle ? pageTitle.text : null}
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
