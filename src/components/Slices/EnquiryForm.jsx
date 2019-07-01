import React from 'react';
import { Wrapper } from '../common';
import { ContactForm } from '../Forms';
import './EnquiryForm.scss';

const getSlug = (location) => {
  if (!location) return null;
  const {
    pathname = '',
  } = location;
  // Remove all forward slashes to get just the slug
  return pathname ? pathname.replace(/\//g, '') : '';
};

const EnquiryForm = (props) => {
  const {
    data,
    location,
  } = props;
  const {
    primary,
  } = data;
  const {
    formTitle,
    formSubtitle,
  } = primary;
  const formAffix = getSlug(location);
  return (
    <section className="enquiry-form page-block">
      <Wrapper>
        <h2 className="block-title">{formTitle.text}</h2>
        <p className="subtitle">{formSubtitle.text}</p>
        <ContactForm formName={`contact-form${formAffix ? `-${formAffix}` : ''}`} />
      </Wrapper>
    </section>
  );
};

export default EnquiryForm;
