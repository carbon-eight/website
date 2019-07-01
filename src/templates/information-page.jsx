import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
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
      // body,
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    return (
      <Layout location={location} seoData={seoData}>
        <div className="page-block temp-block">
          <h1 className="block-title">Information Page - To Be Built!</h1>
        </div>
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
