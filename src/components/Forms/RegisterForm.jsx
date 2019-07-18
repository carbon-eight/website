import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { decodeEntities } from '../../util/helpers';
import './RegisterForm.scss';

const FORM_KEY_NAME = 'NAME';
const FORM_KEY_PHONE = 'PHONE';
const FORM_KEY_BUSINESS = 'BUSINESS';

class RegisterForm extends Component {
  state = {
    email: '',
    fieldValues: {},
    errorMessage: null,
    submitting: false,
    submitSuccess: false,
    submitError: false,
  }

  submitHandler = async (event) => {
    const {
      email,
      fieldValues,
      submitting,
    } = this.state;
    const {
      mailchimpEndpoint = null,
    } = this.props;
    if (submitting) return false;
    this.setState({
      submitting: true,
      submitSuccess: false,
      submitError: false,
    });
    const result = await addToMailchimp(email, fieldValues, mailchimpEndpoint);
    if (result.result === 'success') {
      this.setState({
        submitSuccess: true,
        submitting: false,
      });
    } else {
      event.preventDefault();
      this.setState({
        errorMessage: decodeEntities(result.msg),
        submitError: true,
        submitting: false,
      });
    }
  }

  handleChange = (event, fieldKey) => {
    const { fieldValues } = this.state;
    this.setState({
      fieldValues: {
        ...fieldValues,
        [fieldKey]: event.target.value,
      },
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    const {
      formName,
      isBusiness,
    } = this.props;
    return (
      <form
        className="contact-form"
        name={formName}
        method="POST"
        onSubmit={event => this.submitHandler(event)}
        action="/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div data-netlify-recaptcha="true" />
        <input type="hidden" name="form-name" value={formName} />
        <label htmlFor="bot-field" style={{ display: 'none' }}>
          <span>Don’t fill this out:</span>
          <input name="bot-field" type="text" id="name" placeholder="Don’t fill this out!" />
        </label>
        { isBusiness ? (
          <>
            <label className="field half-width half-width-left" htmlFor="business-name">
              <span className="field-label">Business name</span>
              <input
                type="text"
                id="business-name"
                name="business-name"
                onChange={event => this.handleChange(event, FORM_KEY_BUSINESS)}
              />
            </label>
            <label className="field half-width half-width-right" htmlFor="name">
              <span className="field-label">Contact name</span>
              <input
                type="text"
                id="name"
                name="name"
                onChange={event => this.handleChange(event, FORM_KEY_NAME)}
                required
              />
            </label>
          </>
        ) : (
          <label className="field full-width" htmlFor="name">
            <span className="field-label">Name</span>
            <input
              type="text"
              id="name"
              name="name"
              onChange={event => this.handleChange(event, FORM_KEY_NAME)}
              required
            />
          </label>
        )}
        <label className="field half-width half-width-left" htmlFor="phone">
          <span className="field-label">Phone number</span>
          <input
            type="tel"
            pattern="^\+?\d{0,13}"
            id="phone"
            name="phone"
            onChange={event => this.handleChange(event, FORM_KEY_PHONE)}
            required
          />
        </label>
        <label className="field half-width half-width-right" htmlFor="email">
          <span className="field-label">Email</span>
          <input
            type="email"
            id="email"
            name="email"
            onChange={event => this.handleEmailChange(event)}
            required
          />
        </label>
        <label className="field full-width" htmlFor="message">
          <span className="field-label">Message</span>
          <textarea id="message" name="message" rows="6" />
        </label>
        <div className="form-actions">
          <button className="send-button cta-button" type="submit" aria-label="Send">
            <span>Send</span>
          </button>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
