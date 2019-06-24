import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
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
      email,
      submitting,
      submitSuccess,
      submitError,
    } = this.state;
    return (
      <div className="subscribe-form-block">
        <div className={`form-container ${submitSuccess ? 'submit-success' : ''}`}>
          <div className="inner-container">
            { submitSuccess && (
              <div className="success-message">
                <span className="title">Nice one! You’re on the list.</span>
              </div>
            )}
            { !submitSuccess && (
              <>
                <div className="sign-up-message">
                  <span className="title">More stories are in the making.</span>
                  <span className="subtitle">Want to see more? Subscribe my to my newsletter to get the news stories delivered to your inbox</span>
                </div>
                <form
                  className={`subscribe-form ${submitError ? 'has-error' : ''}`}
                  name="subscribe"
                  onSubmit={event => this.handleSubmit(event)}
                >
                  <label className="field full-width" htmlFor="name">
                    <span>Full name</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </label>
                  <label htmlFor="email" className="field full-width" aria-label="Email">
                    <span>Your email</span>
                    <input
                      type="email"
                      id="email"
                      disabled={submitting}
                      name="email"
                      placeholder="hello@email.com"
                      onChange={event => this.handleChange(event)}
                      value={email}
                      required
                    />
                  </label>
                  <button className={`submit-button ${submitting ? 'submitting' : ''}`} aria-label="Send" type="submit" disabled={submitting}>
                    <span className="label">{submitting ? 'Submitting...' : 'Sign up'}</span>
                  </button>
                  <div className="error-message">
                    <span>{this.isAlreadySubscribed ? 'Looks like you\'re already subscribed to our mailing list.' : `Uh oh! Something went wrong!`}</span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}
