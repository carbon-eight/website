import React from 'react';
import { Link } from 'gatsby';
import {
  Layout,
} from '../components';
import {
  SuccessMessage,
  Wrapper,
} from '../components/common';
import './thank-you.scss';

const ThankYou = (props) => {
  const {
    location,
  } = props;
  const seoData = {
    metaTitle: 'Thanks for enquiring! » Carbon8',
    metaDescription: '',
    banner: '',
  };
  return (
    <Layout location={location} seoData={seoData}>
      <section className="thank-you-page">
        <Wrapper>
          <div className="text-container">
            <SuccessMessage
              headline="Thanks for getting in touch!"
              message={['We\'ll get back to you soon']}
            />
            <Link
              to="/"
              className="cta-button"
              aria-label="Return to the home page"
            >
              <span>Let's go home</span>
            </Link>
          </div>
        </Wrapper>
      </section>
    </Layout>
  );
};

export default ThankYou;

// export const pageQuery = graphql`
// query ThankYouQuery {
//   page: prismicThankYou {
//     uid,
//     data {
//     }
//   }
// }
// `;
