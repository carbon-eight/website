import React, { Component } from 'react';
import {
  ImageTextBlocks,
  SubscribeBlock,
  EnquiryForm,
  ExplanationBlocks,
  PartnerShowcase,
} from './Slices';

const IMAGE_TEXT_BLOCKS_TYPE = 'image_text_blocks';
const SUBSCRIBE_BLOCK_TYPE = 'newsletter_subscriber';
const EXPLANATION_BLOCKS_TYPE = 'explanation_blocks';
const PARTNER_SHOWCASE_TYPE = 'partner_showcase';
const ENQUIRY_FORM_TYPE = 'enquiry_form';


export default class SliceZone extends Component {
  render() {
    const {
      allSlices,
      location,
      // siteMetadata,
      isMobile,
    } = this.props;
    const slices = allSlices.map((slice) => {
      switch (slice.sliceType) {
        case IMAGE_TEXT_BLOCKS_TYPE:
          return <ImageTextBlocks key={slice.id} data={slice} />;
        case SUBSCRIBE_BLOCK_TYPE:
          return <SubscribeBlock key={slice.id} data={slice} />;
        case ENQUIRY_FORM_TYPE:
          return <EnquiryForm key={slice.id} data={slice} location={location} />;
        case EXPLANATION_BLOCKS_TYPE:
          return (
            <ExplanationBlocks
              key={slice.id}
              data={slice}
              isMobile={isMobile}
            />
          );
        case PARTNER_SHOWCASE_TYPE:
          return <PartnerShowcase key={slice.id} data={slice} />;
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
