import React, { Component } from 'react';
import { Link } from 'gatsby';
import {
  Layout,
} from '../components';
import {
  Wrapper,
} from '../components/common';
import './contribute.scss';

class Contribute extends Component {
  render() {
    const {
      location,
    } = this.props;
    const seoData = {
      metaTitle: 'Contribute',
      metaDescription: '',
      banner: '',
    };
    return (
      <Layout location={location} seoData={seoData}>
        <section className="contribute-page page">
          <Wrapper>
            <div className="text-container">
              <h1 className="title">Contribute</h1>
              <Link
                to="/"
                className="styled-button"
                aria-label="Return to the home page"
              >
                <span>Let's go home</span>
              </Link>
            </div>
          </Wrapper>
        </section>
      </Layout>
    );
  }
}

export default Contribute;

// export const pageQuery = graphql`
// query ContributeQuery {
//   page: prismicContribute {
//     data {
//
//     }
//   }
// }
// `;
