import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import './about.scss';

const About = (props) => {
  const {
    data: {
      page: {
        data: pageData,
      },
    },
    location,
  } = props;
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
  return (
    <Layout
      location={location}
      seoData={seoData}
    >
      About Page
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    page: prismicAbout {
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
