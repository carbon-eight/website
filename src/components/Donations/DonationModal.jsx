import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Wrapper } from '../common';
// import DonationOption from './DonationOption';
import './DonationModal.scss';

const RECURRING_DONATION_OPTION = 'RECURRING_DONATION_OPTION';
const ONCE_OFF_DONATION_OPTION = 'ONCE_OFF_DONATION_OPTION';

class DonationModalTemplate extends Component {
  state = {
    phase: 0,
    donationMode: RECURRING_DONATION_OPTION,
    stripe: null,
  };

  componentDidMount() {
    const stripe = window.Stripe('pk_test_86PRNmvFzBl74FSwWhOfL8J5000mohXvYl');
    this.setState({ stripe });
  }

  setDonationMode = (event, donationMode) => {
    if (event) event.preventDefault();
    this.setState({ donationMode });
  }

  checkoutHandler = async (event, stripe, items) => {
    const { error } = await stripe.redirectToCheckout({
      items,
      successUrl: `${window.location.origin}#success`,
      cancelUrl: `${window.location.origin}/`,
      billingAddressCollection: 'required',
    });
    if (error) console.error('Error redirecting to the checkout:', error);
  }

  render() {
    const {
      phase,
      donationMode,
      stripe,
    } = this.state;
    const {
      stripeProducts,
      stripePlans,
    } = this.props;
    return (
      <section className="donation-modal">
        <Wrapper>
          <div className="modal-container">
            <div className="donation-mode-selector">
              <button
                type="button"
                className="donation-mode-button"
                onClick={event => this.setDonationMode(event, RECURRING_DONATION_OPTION)}
                aria-label="Show package testimonials"
              >
                <span>Contribute Monthly</span>
              </button>
              <button
                type="button"
                className="donation-mode-button"
                onClick={event => this.setDonationMode(event, ONCE_OFF_DONATION_OPTION)}
                aria-label="Show package testimonials"
              >
                <span>Contribute Once</span>
              </button>
            </div>
          </div>
        </Wrapper>
      </section>
    );
  }
}

const DonationModal = props => (
  <StaticQuery
    query={graphql`
      query {
        stripeProducts: allStripeSku (
          filter: { product: { id: { eq: "prod_FH57pA9mhamtKh" } } }
          sort: { fields: [price] }
        ) {
          edges {
            node {
              id
              price
              currency
            }
          }
        }
        stripePlans: allStripePlan(
          sort: { fields: [amount] }
        ) {
          edges {
            node {
              id
              amount
              currency
            }
          }
        }
      }
    `}
    render={data => <DonationModalTemplate {...data} {...props} />}
  />
);

export default DonationModal;
