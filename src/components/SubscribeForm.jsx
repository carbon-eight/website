import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Wrapper } from './common';
import { decodeEntities } from '../util/helpers';
import './SubscribeForm.scss';

export default class SubscribeForm extends Component {
  state = {
    name: '',
    email: '',
    errorMessage: null,
    submitting: false,
    submitSuccess: false,
    submitError: false,
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      email,
      submitting,
    } = this.state;
    const {
      mailchimpEndpoint = null,
    } = this.props;
    const endpoint = mailchimpEndpoint && mailchimpEndpoint.text ? mailchimpEndpoint.text : null;
    if (submitting) return false;
    const fields = {
      FNAME: name,
    };
    this.setState({
      submitting: true,
      submitSuccess: false,
      submitError: false,
    });
    const result = await addToMailchimp(email, fields, endpoint);
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

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleEmailChange = (event) => {
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
      title,
    } = this.props;
    const {
      name,
      email,
      submitting,
      submitSuccess,
      submitError,
    } = this.state;
    return (
      <div className="subscribe-form-block page-block">
        <Wrapper>
          <h2 className="block-title">{title}</h2>
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
                  <label className={`field${name !== '' ? ' has-value' : ''}`} htmlFor="name" aria-label="Name">
                    <span className="field-label">Name</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="name"
                      onChange={event => this.handleNameChange(event)}
                      required
                    />
                  </label>
                  <label className={`field${email !== '' ? ' has-value' : ''}`} htmlFor="email" aria-label="Email">
                    <span className="field-label">Email</span>
                    <input
                      type="email"
                      id="email"
                      placeholder="email"
                      disabled={submitting}
                      name="email"
                      onChange={event => this.handleEmailChange(event)}
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
