import React from 'react';
import './ContactForm.scss';

const ContactForm = ({ formName, isBusiness }) => (
  <form
    className="contact-form"
    name={formName}
    method="POST"
    action="/success"
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
          <input type="text" id="business-name" name="business-name" />
        </label>
        <label className="field half-width half-width-right" htmlFor="name">
          <span className="field-label">Full name</span>
          <input type="text" id="name" name="name" required />
        </label>
      </>
    ) : (
      <label className="field full-width" htmlFor="name">
        <span className="field-label">Name</span>
        <input type="text" id="name" name="name" required />
      </label>
    )}
    <label className="field half-width half-width-left" htmlFor="phone">
      <span className="field-label">Phone number</span>
      <input
        type="tel"
        pattern="^\+?\d{0,13}"
        id="phone"
        name="phone"
        required
      />
    </label>
    <label className="field half-width half-width-right" htmlFor="email">
      <span className="field-label">Email</span>
      <input type="email" id="email" name="email" required />
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

export default ContactForm;
