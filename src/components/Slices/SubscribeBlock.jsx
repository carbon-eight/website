import React from 'react';
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
    <SubscribeForm title={title.text} />
  );
};

export default SubscribeBlock;
