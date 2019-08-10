import React from 'react';
import { graphql } from 'gatsby';
import { Layout, PageHero } from '../components';
import { Wrapper } from '../components/common';
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
    heroTitle,
    heroSubtitle,
    introTitle,
    visionTitle,
    visionText,
    visionImage,
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
      <PageHero
        title={heroTitle.text}
        subtitle={heroSubtitle.text}
      />
      <section className="about-intro">
        <Wrapper>
          <h2 className="title">{introTitle.text}</h2>
        </Wrapper>
      </section>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    page: prismicAbout {
      uid,
      data {
        heroTitle: hero_title {
          text
        }
        heroSubtitle: hero_subtitle {
          text
        }
        introTitle: intro_title {
          text
        }
        visionTitle: vision_title {
          html
        }
        visionText: vision_text {
          text
        }
        visionImage: vision_image {
          localFile {
            id
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
