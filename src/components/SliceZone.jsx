import React, { Component } from 'react';
import {
  ImageTextBlocks,
  SubscribeBlock,
} from './Slices';

const IMAGE_TEXT_BLOCKS_TYPE = 'image_text_blocks';
const SUBSCRIBE_BLOCK_TYPE = 'newsletter_subscriber';


export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props;
    console.log({allSlices});
    const slices = allSlices.map((s) => {
      switch (s.slice_type) {
        case IMAGE_TEXT_BLOCKS_TYPE:
          return <ImageTextBlocks key={s.id} input={s} />;
        case SUBSCRIBE_BLOCK_TYPE:
          return <SubscribeBlock key={s.id} input={s} />;
        default:
          return null;
      }
    });
    return (
      <div className="slice-zone">
        {slices}
      </div>
    );
  }
}
