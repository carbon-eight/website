import React from 'react';
import { Wrapper } from '../common';
import { SubscribeForm } from '..';

const SubscribeBlock = (props) => {
  const {
    data,
  } = props;
  const {
    primary,
  } = data;
  const {
    title,
  } = primary;
  return (
    <div className="subscribe-form-block page-block">
      <Wrapper>
        <h2 className="block-title">{title.text}</h2>
        <SubscribeForm />
      </Wrapper>
    </div>
  );
};

export default SubscribeBlock;
