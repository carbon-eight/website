import React from 'react';

const ContactForm = (props) => {
  // const {
  //   someProp,
  // } = props;
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="bot-field" style={{ display: 'none' }}>
        <span>Don’t fill this out:</span>
        <input name="bot-field" type="text" id="name" placeholder="Don’t fill this out!" />
      </label>
      <label className="field full-width" htmlFor="name">
        <span>Name</span>
        <input type="text" id="name" name="name" placeholder="Name" required />
      </label>
      <label className="field half-width half-width-left" htmlFor="phone">
        <span>Phone number</span>
        <input
          type="tel"
          pattern="^\+?\d{0,13}"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          required
        />
      </label>
      <label className="field half-width half-width-right" htmlFor="email">
        <span>Email</span>
        <input type="email" id="email" name="email" placeholder="Email" required />
      </label>
      <label className="field full-width" htmlFor="message">
        <span>Message</span>
        <textarea id="message" name="message" placeholder="Message" rows="4" />
      </label>
      <div data-netlify-recaptcha="true" />
      <div className="form-actions">
        <button className="send-button" type="submit" aria-label="Send">
          <span>Send</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
