import React, { Component } from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
} from '../components';
import {
  FaqHero,
  CategoryButtons,
  QuestionsList,
  SearchBar,
} from '../components/faq';
import './faq.scss';

class FrequentlyAskedQuestions extends Component {
  state = {
    activeCategory: null,
    searchTerm: '',
  }

  render() {
    const {
      activeCategory,
      searchTerm,
    } = this.state;
    const {
      data: {
        page: {
          data: pageData,
        },
      },
      location,
    } = this.props;
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
    console.log({ questions });
    return (
      <Layout location={location} seoData={seoData}>
        <FaqHero />
        <SearchBar

        />
        <CategoryButtons

        />
        <QuestionsList

        />
      </Layout>
    );
  }
}

export default FrequentlyAskedQuestions;

export const pageQuery = graphql`
query FrequentlyAskedQuestionsQuery {
  page: prismicFrequentlyAskedQuestions {
    uid,
    data {
      questions {
        question {
          text
        }
        answer {
          html
        }
        category {
          document {
            ... on PrismicQuestionCategory {
              id
              data {
                categoryName: category_name {
                  text
                }
              }
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
