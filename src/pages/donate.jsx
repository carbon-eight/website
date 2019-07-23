import React from 'react';
import { graphql } from 'gatsby';
import queryString from 'query-string';
import { useMediaQuery } from 'react-responsive';
import { Layout, SliceZone } from '../components';
import { Wrapper } from '../components/common';
import { DonationModal } from '../components/Donations';
import {
  SMALL_MOBILE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../util/breakpoints';
import './donate.scss';

const isClient = typeof window !== 'undefined';

const Donate = (props) => {
  const isMobile = useMediaQuery({ maxWidth: `${MOBILE_BREAKPOINT}px` });
  const isSmallMobile = useMediaQuery({ maxWidth: `${SMALL_MOBILE_BREAKPOINT}px` });
  if (isClient) console.log('window.innerWidth', window.innerWidth);
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
  const donationSuccess = queryParams.success === 'true';
  return (
    <Layout
      location={location}
      seoData={seoData}
      isSmallMobile={isSmallMobile}
    >
      <div className="page-block donation-block">
        <Wrapper>
          <h1 className="block-title">Contribute to regenerating aussie soil.</h1>
        </Wrapper>
        <DonationModal
          location={location}
          donationSuccess={donationSuccess}
          isMobile={isMobile}
        />
      </div>
      <SliceZone
        allSlices={body}
        location={location}
        // siteMetadata={siteMetadata}
      />
    </Layout>
  );
};

export default Donate;

export const pageQuery = graphql`
  query DonateQuery {
    site {
      siteMetadata {
        stripeOnceOffProdKey,
        stripeMonthlyProdKey,
        stripeVariableSku,
      }
    },
    page: prismicDonate {
      uid,
      data {
        body {
          ... on PrismicDonateBodyImageTextBlocks {
            id
            sliceType: slice_type
            primary {
              title {
                html
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
              blockTitle: block_title {
                html
                text
              }
              description {
                html
                text
              }
              # link {
              #   id
              #   url
              #   target
              # }
              # linkLabel: link_label {
              #   html
              #   text
              # }
            }
          }
          ... on PrismicDonateBodyNewsletterSubscriber {
            id
            sliceType: slice_type
            primary {
              title {
                html
                text
              }
            }
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
