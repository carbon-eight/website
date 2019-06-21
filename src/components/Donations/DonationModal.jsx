import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Wrapper } from '../common';
import { ProgressDots } from '..';
import {
  SponsorshipTiles,
  DonationTiles,
  DonationSuccess,
} from '.';
import {
  RECURRING_OPTION,
  ONCE_OFF_OPTION,
  VARIABLE_DONATION_SKU,
} from './donation-constants';
import './DonationModal.scss';

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
    selectedDonationId: null,
    variableAmount: null,
    donationMode: ONCE_OFF_OPTION, // NOTE: Before go live change me to RECURRING_OPTION
    stripe: null,
  };

  componentDidMount() {
    const stripe = window.Stripe('pk_test_86PRNmvFzBl74FSwWhOfL8J5000mohXvYl');
    this.setState({ stripe });
  }

  setDonationMode = (event, donationMode) => {
    if (event) event.preventDefault();
    this.setState({
      donationMode,
      selectedDonationId: null,
    });
  }

  setVariableAmount = (variableAmount) => {
    this.setState({
      variableAmount,
    });
  }

  selectDonationOption = (event, selectedDonationId) => {
    if (event) event.preventDefault();
    this.setState({ selectedDonationId });
  }

  redirectToCheckout = async (event, selectedDonationId) => {
    const {
      location,
    } = this.props;
    const {
      stripe,
      donationMode,
      variableAmount,
    } = this.state;
    if (!selectedDonationId || !stripe) return null;
    const items = [];
    if (selectedDonationId === VARIABLE_DONATION_SKU) {
      if (!variableAmount) return null;
      items.push({
        sku: selectedDonationId,
        quantity: parseInt(variableAmount, 10),
      });
    } else if (donationMode === ONCE_OFF_OPTION) {
      items.push({
        sku: selectedDonationId,
        quantity: 1,
      });
    } else if (donationMode === RECURRING_OPTION) {
      items.push({
        plan: selectedDonationId,
        quantity: 1,
      });
    }
    const { error } = await stripe.redirectToCheckout({
      items,
      successUrl: `${location.origin}?success=true`,
      cancelUrl: `${location.origin}`,
      // billingAddressCollection: 'required',
    });
    if (error) console.error('Error redirecting to the checkout:', error);
  }

  render() {
    const {
      variableAmount,
      donationMode,
      selectedDonationId,
    } = this.state;
    const {
      donationSuccess,
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
            { donationSuccess ? (
              <DonationSuccess />
            ) : (
              <>
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
                <div className="donation-options">
                  <SponsorshipTiles
                    visible={recurringDonationMode}
                    tiles={stripePlanItems}
                    selectedDonationId={selectedDonationId}
                    selectTileHandler={this.selectDonationOption}
                  />
                  <DonationTiles
                    visible={onceOffDonationMode}
                    tiles={stripeProductItems}
                    variableAmount={variableAmount}
                    setVariableAmountHandler={this.setVariableAmount}
                    selectedDonationId={selectedDonationId}
                    selectTileHandler={this.selectDonationOption}
                  />
                </div>
                <div className="modal-actions">
                  <button
                    type="button"
                    disabled={!selectedDonationId || (selectedDonationId === VARIABLE_DONATION_SKU && !variableAmount)}
                    className="modal-action-button cta-button"
                    onClick={event => this.redirectToCheckout(event, selectedDonationId)}
                    aria-label="Proceed to checkout"
                  >
                    <span>Next</span>
                  </button>
                </div>
              </>
            )}
            <ProgressDots
              numberOfDots={3}
              activeDot={donationSuccess ? 3 : 1}
            />
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
          limit: 4
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
          limit: 3
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
