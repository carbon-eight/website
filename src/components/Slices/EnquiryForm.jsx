import React from 'react';
import { Wrapper } from '../common';
import { RegisterForm } from '../Forms';
import './EnquiryForm.scss';

export const ENQUIRY_FORM_ID = 'enquiry-form';

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
    isBusinessEnquiry,
  } = primary;
  const formAffix = getSlug(location);
  return (
    <section id={ENQUIRY_FORM_ID} className="enquiry-form page-block">
      <Wrapper>
        <h2 className="block-title">{formTitle.text}</h2>
        <p className="subtitle">{formSubtitle.text}</p>
        <RegisterForm
          formName={`contact-form${formAffix ? `-${formAffix}` : ''}`}
          isBusiness={Boolean(isBusinessEnquiry === 'true')}
        />
      </Wrapper>
    </section>
  );
};

export default EnquiryForm;
