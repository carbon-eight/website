import React from 'react';
import { graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { Layout, SliceZone, PageHero } from '../components';
import {
  SMALL_MOBILE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../util/breakpoints';

const ExpressionOfInterestTemplate = (props) => {
  const isMobile = useMediaQuery({ maxWidth: `${MOBILE_BREAKPOINT}px` });
  const isSmallMobile = useMediaQuery({ maxWidth: `${SMALL_MOBILE_BREAKPOINT}px` });
  const {
    data: {
      page: {
        data: pageData,
      },
    },
    location,
  } = props;
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
  return (
    <Layout
      location={location}
      seoData={seoData}
      isSmallMobile={isSmallMobile}
    >
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
};

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
              mailchimpEndpoint: mailchimp_endpoint {
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
              mailchimpEndpoint: mailchimp_endpoint {
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
