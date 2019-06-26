import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import {
  Wrapper,
} from '../common';
import { decodeEntities } from '../../util/helpers';
import './SubscribeBlock.scss';

export default class SubscribeForm extends Component {
  state = {
    email: '',
    errorMessage: null,
    submitting: false,
    submitSuccess: false,
    submitError: false,
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, submitting } = this.state;
    if (submitting) return false;
    this.setState({
      submitting: true,
      submitSuccess: false,
      submitError: false,
    });
    const result = await addToMailchimp(email);
    if (result.result === 'success') {
      this.setState({
        submitSuccess: true,
        submitting: false,
      });
    } else {
      this.setState({
        errorMessage: decodeEntities(result.msg),
        submitError: true,
        submitting: false,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  isAlreadySubscribed = () => {
    const { errorMessage } = this.state;
    return errorMessage.indexOf('already subscribed') || errorMessage.indexOf('too many requests');
  }

  render() {
    const {
      data,
    } = this.props;
    const {
      primary,
      // items,
    } = data;
    const {
      title,
    } = primary;
    const {
      email,
      submitting,
      submitSuccess,
      submitError,
    } = this.state;
    return (
      <div className="subscribe-form-block page-block">
        <Wrapper>
          <h2 className="block-title">{title.text}</h2>
          <div className={`form-container ${submitSuccess ? 'submit-success' : ''}`}>
            <>
              { submitSuccess && (
                <div className="success-message">
                  <p>Nice one! You’re on the list.</p>
                </div>
              )}
              { !submitSuccess && (
                <form
                  className={`subscribe-form ${submitError ? 'has-error' : ''}`}
                  name="subscribe"
                  onSubmit={event => this.handleSubmit(event)}
                >
                  <label className="field" htmlFor="name">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </label>
                  <label htmlFor="email" className="field" aria-label="Email">
                    <input
                      type="email"
                      id="email"
                      disabled={submitting}
                      name="email"
                      placeholder="Email"
                      onChange={event => this.handleChange(event)}
                      value={email}
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    className={`cta-button submit-button ${submitting ? 'submitting' : ''}`}
                    aria-label="Subscribe to the newsletter"
                    disabled={submitting}
                  >
                    <span className="label">{submitting ? 'Submitting...' : 'Stay in the Loop'}</span>
                  </button>
                  <div className="error-message">
                    <span>{this.isAlreadySubscribed ? 'Oops! Looks like you\'re already subscribed to our mailing list.' : `Uh oh! Something went wrong!`}</span>
                  </div>
                </form>
              )}
            </>
          </div>
        </Wrapper>
      </div>
    );
  }
}
