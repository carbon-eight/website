import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
} from '../components';
import {
  Hero,
} from '../components/faq';
import './faq.scss';

const FrequentlyAskedQuestions = (props) => {
  const {
    data: {
      page: {
        data: pageData,
      },
    },
    location,
  } = props;
  const {
    questions,
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
      <Hero />
    </Layout>
  );
};

export default FrequentlyAskedQuestions;

export const pageQuery = graphql`
query FrequentlyAskedQuestionsQuery {
  page: prismicFrequentlyAskedQuestions {
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
