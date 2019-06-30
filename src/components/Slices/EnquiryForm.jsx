import React from 'react';
import { Wrapper } from '../common';
import { ContactForm } from '../Forms';
import './EnquiryForm.scss';

const EnquiryForm = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
  } = data;
  const {
    formTitle,
    formSubtitle,
  } = primary;
  return (
    <section className="enquiry-form page-block">
      <Wrapper>
        <h2 className="block-title">{formTitle.text}</h2>
        <p className="subtitle">{formSubtitle.text}</p>
        <ContactForm />
      </Wrapper>
    </section>
  );
};

export default EnquiryForm;
