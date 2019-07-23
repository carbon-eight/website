import React from 'react';
import { graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { Layout } from '../components';
import { LegalPageHero, LegalPageBody } from '../components/Legal';
import {
  SMALL_MOBILE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../util/breakpoints';
import './information-page.scss';

const isClient = typeof window !== 'undefined';

const InformationPageTemplate = (props) => {
  const isMobile = useMediaQuery({ maxWidth: `${MOBILE_BREAKPOINT}px` });
  const isSmallMobile = useMediaQuery({ maxWidth: `${SMALL_MOBILE_BREAKPOINT}px` });
  if (isClient) console.log('window.innerWidth', window.innerWidth);
  console.log({ isMobile });
  console.log({ isSmallMobile });
  const {
    data: {
      page: {
        data: pageData,
      },
    },
    location,
  } = props;
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
};

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
