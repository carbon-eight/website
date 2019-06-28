import React from 'react';
import { Wrapper } from '../common';
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
      </Wrapper>
    </section>
  );
};

export default EnquiryForm;
