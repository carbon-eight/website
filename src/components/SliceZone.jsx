import React, { Component } from 'react';
import {
  ImageTextBlocks,
  SubscribeBlock,
  EnquiryForm,
  ExplanationBlocks,
  PartnerShowcase,
  GoalsCarousel,
  FullWidthVideoBlock,
  FoundersGallery,
  TeamGallery,
  TextAndVideoBlock,
} from './Slices';

const IMAGE_TEXT_BLOCKS_TYPE = 'image_text_blocks';
const SUBSCRIBE_BLOCK_TYPE = 'newsletter_subscriber';
const EXPLANATION_BLOCKS_TYPE = 'explanation_blocks';
const PARTNER_SHOWCASE_TYPE = 'partner_showcase';
const ENQUIRY_FORM_TYPE = 'enquiry_form';
const GOALS_CAROUSEL_TYPE = 'goals_carousel';
const FULL_WIDTH_VIDEO_BLOCK_TYPE = 'full_width_video_block';
const FOUNDERS_GALLERY_TYPE = 'founders_gallery';
const TEAM_GALLERY_TYPE = 'team_gallery';
const TEXT_AND_VIDEO_TYPE = 'text_and_video';


export default class SliceZone extends Component {
  render() {
    const {
      allSlices,
      location,
      isMobile,
      isSmallMobile,
      // siteMetadata,
    } = this.props;
    const slices = allSlices.map((slice) => {
      switch (slice.sliceType) {
        case IMAGE_TEXT_BLOCKS_TYPE:
          return (
            <ImageTextBlocks
              key={slice.id}
              data={slice}
            />
          );
        case SUBSCRIBE_BLOCK_TYPE:
          return (
            <SubscribeBlock
              key={slice.id}
              data={slice}
            />
          );
        case ENQUIRY_FORM_TYPE:
          return (
            <EnquiryForm
              key={slice.id}
              data={slice}
              location={location}
            />
          );
        case EXPLANATION_BLOCKS_TYPE:
          return (
            <ExplanationBlocks
              key={slice.id}
              data={slice}
              isMobile={isMobile}
            />
          );
        case PARTNER_SHOWCASE_TYPE:
          return (
            <PartnerShowcase
              key={slice.id}
              data={slice}
              isSmallMobile={isSmallMobile}
            />
          );
        case FOUNDERS_GALLERY_TYPE:
          return (
            <FoundersGallery
              key={slice.id}
              data={slice}
            />
          );
        case GOALS_CAROUSEL_TYPE:
          return (
            <GoalsCarousel
              key={slice.id}
              data={slice}
            />
          );
        case FULL_WIDTH_VIDEO_BLOCK_TYPE:
          return (
            <FullWidthVideoBlock
              key={slice.id}
              data={slice}
            />
          );
        case TEAM_GALLERY_TYPE:
          return (
            <TeamGallery
              key={slice.id}
              data={slice}
            />
          );
        case TEXT_AND_VIDEO_TYPE:
          return (
            <TextAndVideoBlock
              key={slice.id}
              data={slice}
            />
          );
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
