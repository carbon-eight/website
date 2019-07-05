import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout, SliceZone, PageHero } from '../components';

const isClient = typeof window !== 'undefined';
const MOBILE_BREAKPOINT = 800;
const SMALL_MOBILE_BREAKPOINT = 500;

class ExpressionOfInterestTemplate extends Component {
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
      viewportWidth,
    } = this.state;
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
    const isMobile = Boolean(viewportWidth <= MOBILE_BREAKPOINT);
    const isSmallMobile = Boolean(viewportWidth <= SMALL_MOBILE_BREAKPOINT);
    return (
      <Layout location={location} seoData={seoData}>
        <PageHero
          title={heroTitle.text}
          subtitle={heroSubtitle.text}
          isSmallMobile={isSmallMobile}
        />
        <SliceZone
          allSlices={body}
          location={location}
          isSmallMobile={isSmallMobile}
          isMobile={isMobile}
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
                  id
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
              blockTitle: title {
                text
              }
            }
          }
          ... on PrismicExpressionOfInterestBodyPartnerShowcase {
            id
            sliceType: slice_type
            primary {
              title {
                html
                text
              }
              subtitle {
                html
                text
              }
            }
            items {
              link {
                url
                target
                linkType: link_type
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
              isBusinessEnquiry: business_enquiry
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
