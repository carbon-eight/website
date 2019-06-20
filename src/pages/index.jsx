import React, { Component } from 'react';
import { graphql } from 'gatsby';
import queryString from 'query-string';
import { Layout } from '../components';
import { Wrapper } from '../components/common';
import { DonationModal } from '../components/Donations';
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
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    const queryParams = queryString.parse(location.search);
    console.log({ queryParams });
    const donationSuccess = queryParams.success === 'true';
    return (
      <Layout location={location} seoData={seoData}>
        <Wrapper>
          <div className="page-block donation-block">
            <h1 className="page-title">Contribute to regenerating aussie soil.</h1>
            <DonationModal
              donationSuccess={donationSuccess}
            />
          </div>
        </Wrapper>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    # site {
    #   siteMetadata {
    #     blogSlug,
    #   }
    # },
    page: prismicHome {
      uid,
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
