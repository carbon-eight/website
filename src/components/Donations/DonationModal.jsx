import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Wrapper } from '../common';
import { SponsorshipTiles, DonationTiles } from '.';
import './DonationModal.scss';

const RECURRING_OPTION = 'RECURRING_OPTION';
const ONCE_OFF_OPTION = 'ONCE_OFF_OPTION';

const ModeSelectionButton = (props) => {
  const {
    isActive,
    mode,
    label,
    setDonationModeHandler,
  } = props;
  return (
    <button
      type="button"
      className={`donation-mode-button selection-button ${isActive ? 'active' : ''}`}
      onClick={event => setDonationModeHandler(event, mode)}
      aria-label={`Choose to ${label}`}
    >
      <span>{label}</span>
    </button>
  );
};

class DonationModalTemplate extends Component {
  state = {
    phase: 0,
    selectedDonationOption: null,
    donationMode: RECURRING_OPTION,
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

  selectDonationOption = (event, selectedDonationOption) => {
    if (event) event.preventDefault();
    this.setState({ selectedDonationOption });
  }

  redirectToCheckout = async (event, stripe, items) => {
    if (!items || !stripe) return null;
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
      selectedDonationOption,
      stripe,
    } = this.state;
    const {
      stripeProducts,
      stripePlans,
    } = this.props;
    const stripeProductItems = stripeProducts.edges.map(stripeProduct => (
      { ...stripeProduct.node }
    ));
    const stripePlanItems = stripePlans.edges.map(stripeProduct => (
      { ...stripeProduct.node }
    ));
    const recurringDonationMode = donationMode === RECURRING_OPTION;
    const onceOffDonationMode = donationMode === ONCE_OFF_OPTION;
    return (
      <section className="donation-modal">
        <Wrapper>
          <div className="modal-container">
            <div className="donation-mode-selector">
              <ModeSelectionButton
                isActive={recurringDonationMode}
                mode={RECURRING_OPTION}
                label="Contribute Monthly"
                setDonationModeHandler={this.setDonationMode}
              />
              <ModeSelectionButton
                isActive={onceOffDonationMode}
                mode={ONCE_OFF_OPTION}
                label="Contribute Once"
                setDonationModeHandler={this.setDonationMode}
              />
            </div>
            <div className="donation-tiles">
              {recurringDonationMode && (
                <SponsorshipTiles
                  tiles={stripeProductItems}
                />
              )}
              {onceOffDonationMode && (
                <DonationTiles
                  tiles={stripePlanItems}
                />
              )}
            </div>
            <div className="modal-actions">
              <button
                type="button"
                disabled={!selectedDonationOption}
                className="modal-action-button cta-button"
                onClick={event => this.redirectToCheckout(event, selectedDonationOption)}
                aria-label="Proceed to checkout"
              >
                <span>Next</span>
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
              price: amount
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
