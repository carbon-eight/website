import React from 'react';
import './SocialLink.scss';

const FACEBOOK_TYPE = 'Facebook';
const TWITTER_TYPE = 'Twitter';
const INSTAGRAM_TYPE = 'Instagram';

const SocialLink = (props) => {
  const {
    socialLink,
    theme = 'light',
    size = 'small',
  } = props;
  const {
    type,
    link,
  } = socialLink;
  const { url } = link;
  const typeClass = type.replace(/\s+/g, '-').toLowerCase();
  switch (type) {
    case FACEBOOK_TYPE:
      return (
        <a
          className={`social-link ${typeClass} ${theme} ${size}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open a new tab to Facebook"
        >
          <svg viewBox="0 0 14 27" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.443.005L10.093 0C6.327 0 3.895 2.523 3.895 6.429v2.964H.526A.53.53 0 0 0 0 9.926v4.295a.53.53 0 0 0 .527.532h3.369V25.59a.53.53 0 0 0 .526.533h4.396a.53.53 0 0 0 .527-.533V14.753h3.939a.53.53 0 0 0 .526-.532l.002-4.295a.536.536 0 0 0-.154-.377.524.524 0 0 0-.373-.156h-3.94V6.88c0-1.207.284-1.82 1.84-1.82l2.257-.001a.53.53 0 0 0 .527-.533V.538a.53.53 0 0 0-.526-.533z" fillRule="evenodd" />
          </svg>
        </a>
      );
    case TWITTER_TYPE:
      return (
        <a
          className={`social-link ${typeClass} ${theme} ${size}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open a new tab to Twitter"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" />
          </svg>
        </a>
      );
    case INSTAGRAM_TYPE:
      return (
        <a
          className={`social-link ${typeClass} ${theme} ${size}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open a new tab to Instagram"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
          </svg>
        </a>
      );
    default:
      return null;
  }
};

export default SocialLink;