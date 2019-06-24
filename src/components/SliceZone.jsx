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
    const slices = allSlices.map((slice) => {
      switch (slice.sliceType) {
        case IMAGE_TEXT_BLOCKS_TYPE:
          return <ImageTextBlocks key={slice.id} data={slice} />;
        case SUBSCRIBE_BLOCK_TYPE:
          return <SubscribeBlock key={slice.id} data={slice} />;
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
