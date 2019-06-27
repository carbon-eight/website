import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout, SliceZone } from '../components';

class ExpressionOfInterestTemplate extends Component {
  render() {
    const {
      data: {
        page: {
          data: pageData,
        },
      },
      location,
    } = this.props;
    console.log('Props @ ExpressionOfInterestTemplate', this.props);
    console.log({ pageData });
    const {
      body,
      heroTitle,
      heroSubtitle,
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    console.log({ heroTitle });
    return (
      <Layout location={location} seoData={seoData}>
        <h1 className="block-title">{heroTitle.text}</h1>
        <SliceZone
          allSlices={body}
        />
      </Layout>
    );
  }
}

export default ExpressionOfInterestTemplate;

export const pageQuery = graphql`
  query InterestPageBySlug($uid: String!) {
    # site {
    #   siteMetadata {
    #     blogSlug,
    #   }
    # },
    page: prismicExpressionOfInterest(uid: { eq: $uid }) {
      data {
        body {
          ... on PrismicExpressionOfInterestBodyNewsletterSubscriber {
            id
            sliceType: slice_type
            primary {
              title {
                html
                text
              }
            }
          }
          ... on PrismicExpressionOfInterestBodyExplanationBlocks {
            id
            sliceType: slice_type
            primary {
              title {
                text
              }
            }
            items {
              blockImage: block_image {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              description {
                text
              }
              title {
                text
              }
            }
          }
          ... on PrismicExpressionOfInterestBodyPartnerShowcase {
            id
            sliceType: slice_type
            primary {
              subtitle {
                html
                text
              }
              title {
                html
                text
              }
            }
            items {
              link {
                url
                target
                link_type
              }
              name {
                text
              }
              photo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                alt
              }
            }
          }
          ... on PrismicExpressionOfInterestBodyEnquiryForm {
            id
            sliceType: slice_type
            primary {
              formTitle: form_title {
                html
                text
              }
              formSubtitle: form_subtitle {
                html
                text
              }
            }
          }
        }
        heroTitle: hero_title {
          html
          text
        }
        heroSubtitle: hero_subtitle {
          html
          text
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
