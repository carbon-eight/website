import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Wrapper, SuccessMessage } from '../common';
import {
  SponsorshipTiles,
  DonationTiles,
} from '.';
import {
  RECURRING_OPTION,
  ONCE_OFF_OPTION,
  VARIABLE_DONATION_SKU,
} from './donation-constants';
import './DonationModal.scss';

const isClient = typeof window !== 'undefined';

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
      aria-label={`Choose to donate ${label}`}
    >
      <span>{label}</span>
    </button>
  );
};

class DonationModalTemplate extends Component {
  state = {
    selectedDonationId: null,
    variableAmount: null,
    donationMode: RECURRING_OPTION,
    stripe: null,
    tilesHeight: 0,
    errorMessage: null,
    checkoutError: false,
  };

  componentDidMount() {
    if (isClient) this.initializeStripe();
  }

  initializeStripe = () => {
    const {
      site: {
        siteMetadata: {
          stripeApiKey,
        },
      },
    } = this.props;
    const stripe = window.Stripe(stripeApiKey);
    this.setState({ stripe });
  }

  setTilesHeight = (tilesHeight) => {
    this.setState({ tilesHeight });
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
    const { isMobile } = this.props;
    const { selectedDonationId: currId } = this.state;
    if (isMobile && (currId === selectedDonationId)) {
      this.redirectToCheckout(event, selectedDonationId);
    } else {
      this.setState({ selectedDonationId });
    }
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
      successUrl: `${location.href}?success=true`,
      cancelUrl: `${location.href}`,
      // billingAddressCollection: 'required',
    });
    if (error) {
      const { message: errorMessage } = error;
      this.setState({
        errorMessage,
        checkoutError: true,
      });
    }
  }

  render() {
    const {
      variableAmount,
      donationMode,
      selectedDonationId,
      tilesHeight,
      errorMessage,
      checkoutError,
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
    const tilesStyles = tilesHeight ? { height: tilesHeight } : {};
    return (
      <section className="donation-modal">
        <Wrapper>
          <div className="modal-container">
            { donationSuccess ? (
              <SuccessMessage
                headline={null}
                message={['You’re an absolute legend!', 'Thanks for your contribution.']}
              />
            ) : (
              <>
                <div className="donation-mode-selector">
                  <ModeSelectionButton
                    isActive={recurringDonationMode}
                    mode={RECURRING_OPTION}
                    label="Monthly"
                    setDonationModeHandler={this.setDonationMode}
                  />
                  <ModeSelectionButton
                    isActive={onceOffDonationMode}
                    mode={ONCE_OFF_OPTION}
                    label="Once"
                    setDonationModeHandler={this.setDonationMode}
                  />
                </div>
                <div className="donation-options" style={tilesStyles}>
                  <SponsorshipTiles
                    visible={recurringDonationMode}
                    tiles={stripePlanItems}
                    selectedDonationId={selectedDonationId}
                    selectTileHandler={this.selectDonationOption}
                    setTilesHeightHandler={this.setTilesHeight}
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
                { (checkoutError && errorMessage) && (
                  <span className="error-message">{errorMessage}</span>
                )}
                <div className="modal-actions">
                <div className="disclaimer">
                    <p>* All donations are tax deductible</p>
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
                </div>
              </>
            )}
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
        site {
          siteMetadata {
            stripeApiKey,
          }
        },
        stripeProducts: allStripeSku (
          filter: { product: { id: { eq: "prod_FPIirw33Y3DOQ7" } } }
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
