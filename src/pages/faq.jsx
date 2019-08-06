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
    searchQuery: '',
  }

  setActiveCategory = (event, category) => {
    const { activeCategory } = this.state;
    if (event) event.preventDefault();
    if (category !== activeCategory) this.setState({ activeCategory: category });
  }

  render() {
    const {
      activeCategory,
      searchQuery,
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
    const categories = questions.map((faq => faq.category.document[0].data.categoryName.text));
    const uniqueCategories = [...new Set(categories)];
    return (
      <Layout location={location} seoData={seoData}>
        <FaqHero />
        <SearchBar
          searchQuery={searchQuery}
        />
        <CategoryButtons
          activeCategory={activeCategory}
          categories={uniqueCategories}
          setActiveCategoryHandler={this.setActiveCategory}
        />
        <QuestionsList
          questions={questions}
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
