import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  PageHero,
  SliceZone,
} from '../components';
import {
  HtmlContent,
  Wrapper,
  TiltImage,
} from '../components/common';
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
    body,
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
          <h2 className="section-title">{introTitle.text}</h2>
          <div className="vision-block">
            <div className="col text-col">
              <div className="container">
                <span className="label">The Vision</span>
                <h3 className="title">{visionTitle.text}</h3>
                <HtmlContent className="description" content={visionText.html} />
              </div>
            </div>
            <div className="col image-col">
              <TiltImage
                index={0}
                image={visionImage}
                inverted
              />
            </div>
          </div>
        </Wrapper>
      </section>
      <SliceZone
        allSlices={body}
        location={location}
      />
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
          text
        }
        visionText: vision_text {
          html
        }
        visionImage: vision_image {
          alt
          localFile {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        body {
          ... on PrismicAboutBodyFoundersGallery {
            id
            sliceType: slice_type
            primary {
              title {
                text
              }
            }
            items {
              name {
                text
              }
              popUpMessage: pop_up_message {
                text
              }
              profilePhoto: profile_photo {
                alt
                localFile {
                  id
                }
              }
              shortBio: short_bio {
                html
              }
              title {
                text
              }
            }
          }
          ... on PrismicAboutBodyFullWidthVideoBlock {
            id
            sliceType: slice_type
            primary {
              title {
                text
              }
              videoProvider: video_provider
              videoUrl: video_url {
                url
              }
            }
          }
          ... on PrismicAboutBodyGoalsCarousel {
            id
            sliceType: slice_type
            primary {
              headline {
                text
              }
            }
            items {
              goalTitle: goal_title {
                text
              }
              photo {
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
                html
              }
            }
          }
          ... on PrismicAboutBodyTeamGallery {
            id
            sliceType: slice_type
            primary {
              title {
                text
              }
              buttonLabel: button_label {
                text
              }
              buttonLink: button_link {
                slug
                linkType: link_type
                url
              }
              subtitle {
                text
              }
            }
            items {
              name {
                text
              }
              profilePhoto: profile_photo {
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              shortBio: short_bio {
                html
              }
              title {
                text
              }
            }
          }
          ... on PrismicAboutBodyTextAndVideo {
            id
            sliceType: slice_type
            primary {
              title {
                text
              }
              videoProvider: video_provider
              videoUrl: video_url {
                url
              }
              headline {
                text
              }
              description {
                html
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
