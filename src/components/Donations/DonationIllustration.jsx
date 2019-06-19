import React from 'react';
import './DonationIllustration.scss';
import {
  DONATION_TYPE_SMALL,
  DONATION_TYPE_MEDIUM,
  DONATION_TYPE_LARGE,
  DONATION_TYPE_VARIABLE,
} from './donation-constants';

export const DonationIllustration = (props) => {
  const {
    illustrationType,
  } = props;
  switch (illustrationType) {
    case (DONATION_TYPE_SMALL):
      return (
        <div className="donation-illustration donation-type-small">
          <svg viewBox="0 0 280 241" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-24.5 139.577)">
                <path d="M297.504 58.276C256.759 19.426 212.424 0 164.5 0 116.576 0 72.241 19.425 31.496 58.276c-8.793 8.384-9.124 22.31-.74 31.104a22 22 0 0 0 14.536 6.774c50.648 3.198 90.385 4.798 119.208 4.798 28.823 0 68.56-1.6 119.208-4.798 12.126-.766 21.336-11.217 20.57-23.343a22 22 0 0 0-6.774-14.535z" fill="#5B4A2F" />
                <ellipse fill="#3F321D" cx="139.065" cy="30.383" rx="2.128" ry="1.688" />
                <ellipse fill="#3F321D" transform="rotate(-10 98.52 58.755)" cx="98.519" cy="58.755" rx="3.482" ry="2.761" />
              </g>
              <path d="M116.558 54.626c12.45 17.205 20.08 32.007 22.891 44.408 2.812 12.4 2.812 31.248 0 56.543" stroke="#03A678" strokeWidth="10" strokeLinecap="round" />
              <path d="M141.558 117.477c3.25-10.401 8.791-18.651 16.622-24.75" stroke="#03A678" strokeWidth="6" />
              <path d="M116.983 58.046c11.084-7.76 17.19-18.164 9.43-29.248-5.175-7.39-21.838-16.949-49.99-28.678 1.393 30.466 4.677 49.394 9.85 56.783 7.762 11.084 19.626 8.904 30.71 1.143zM156.053 96.325c4.52 4.847 9.982 7.1 14.829 2.58 3.231-3.013 6.732-11.747 10.502-26.201-14.682 2.752-23.639 5.635-26.87 8.648-4.847 4.52-2.981 10.126 1.539 14.973z" fill="#26C281" />
              <g transform="translate(178 151.577)">
                <ellipse fill="#3F321D" transform="rotate(6 8 16.005)" cx="8" cy="16.005" rx="7" ry="4.5" />
                <path d="M5.662 0C8.03 1.04 9.51 2.548 10.103 4.521c.593 1.974.065 5.133-1.585 9.479" stroke="#F69483" strokeWidth="6" strokeLinecap="round" />
              </g>
            </g>
          </svg>
        </div>
      );
    case (DONATION_TYPE_MEDIUM):
      return (
        <div className="donation-illustration donation-type-small">
          <svg viewBox="0 0 280 282" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-24.5 180.577)">
                <path d="M297.504 58.276C256.759 19.426 212.424 0 164.5 0 116.576 0 72.241 19.425 31.496 58.276c-8.793 8.384-9.124 22.31-.74 31.104a22 22 0 0 0 14.536 6.774c50.648 3.198 90.385 4.798 119.208 4.798 28.823 0 68.56-1.6 119.208-4.798 12.126-.766 21.336-11.217 20.57-23.343a22 22 0 0 0-6.774-14.535z" fill="#5B4A2F" />
                <ellipse fill="#3F321D" cx="139.065" cy="30.383" rx="2.128" ry="1.688" />
                <ellipse fill="#3F321D" transform="rotate(-10 98.52 58.755)" cx="98.519" cy="58.755" rx="3.482" ry="2.761" />
              </g>
              <g transform="translate(158.648 210.077)">
                <ellipse fill="#3F321D" transform="rotate(6 8 15.005)" cx="8" cy="15.005" rx="7" ry="4.5" />
                <path d="M13.92.989c-1.487-.448-2.76.396-3.817 2.532C9.046 5.658 8.518 8.817 8.518 13" stroke="#F69483" strokeWidth="6" strokeLinecap="round" />
              </g>
              <path d="M86.026 46c14.598 15.797 23.776 28.234 27.532 37.313 13.214 31.935 26.775 42.302 28.746 50.995 2.812 12.4 2.812 31.248 0 56.544" stroke="#03A678" strokeWidth="10" strokeLinecap="round" />
              <path d="M122.668 100.878c-.942 1.061 4.394-14.348 7.563-29.157 2.371-11.08 2.288-22.218 4.218-23.721" stroke="#03A678" strokeWidth="6" />
              <path d="M95.15 57.963c11.084-7.76 17.19-18.165 9.43-29.248-5.175-7.39-21.838-16.949-49.99-28.678 1.393 30.466 4.677 49.394 9.85 56.783 7.762 11.084 19.626 8.904 30.71 1.143zM130.703 59.08c8.13 1.434 15.251-.42 16.685-8.55.955-5.419-2.11-16.73-9.194-33.935-12.541 13.744-19.29 23.325-20.245 28.745-1.434 8.129 4.625 12.307 12.754 13.74z" fill="#26C281" />
              <path d="M103.558 114.5c2.44 11.8 7.27 21.824 14.486 30.074 7.218 8.25 15.696 13.717 25.435 16.399" stroke="#03A678" strokeWidth="5" strokeLinecap="round" />
              <path d="M105.128 122.957c5.573-1.287 9.614-4.398 8.327-9.971-.857-3.716-5.875-10.101-15.051-19.156-4.279 12.161-5.989 20.1-5.131 23.815 1.286 5.574 6.282 6.598 11.855 5.312z" fill="#26C281" />
              <g>
                <path d="M169.634 161.923c-1.84 0-3.05 7.786-3.627 23.356.04 2.263.98 3.394 2.82 3.394 1.841 0 2.742-1.131 2.703-3.394-.494-5.28-.75-8.974-.77-11.079-.077-8.01.195-12.277-1.126-12.277zM174.103 137.67c-1.344 0-1.054-.617-.437 22.18.152 5.63-.162 15.063-.942 28.3-.072 2.073.812 3.11 2.653 3.11 1.84 0 2.798-1.037 2.87-3.11-.922-33.653-2.303-50.48-4.144-50.48z" fill="#26C281" />
                <path d="M178.903 159.85c1.344 0 .617 5.257 0 18.26a623.21 623.21 0 0 1-.662 11.376c.073 1.183-.811 1.774-2.652 1.774-1.841 0-2.798-.591-2.87-1.774 2.282-19.758 4.343-29.637 6.184-29.637z" fill="#2DDC93" />
              </g>
              <g>
                <path d="M127.794 209.375c-5.553-24.403-6.959-41.528-4.218-51.374 1.899-6.823 7.916-25.577 18.053-56.263" stroke="#26C281" strokeWidth="10" strokeLinecap="round" />
                <path d="M135.707 116.209c9.78 4.983 19.556 5.394 24.54-4.385 3.321-6.52 3.822-22.095 1.502-46.724-21.29 12.6-33.596 22.16-36.917 28.679-4.983 9.78 1.096 17.447 10.875 22.43z" fill="#37D492" />
              </g>
            </g>
          </svg>
        </div>
      );
    case (DONATION_TYPE_LARGE):
      return (
        <div className="donation-illustration donation-type-small">
          <svg viewBox="0 0 281 285" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-24.058 183.577)">
                <path d="M297.504 58.276C256.759 19.426 212.424 0 164.5 0 116.576 0 72.241 19.425 31.496 58.276c-8.793 8.384-9.124 22.31-.74 31.104a22 22 0 0 0 14.536 6.774c50.648 3.198 90.385 4.798 119.208 4.798 28.823 0 68.56-1.6 119.208-4.798 12.126-.766 21.336-11.217 20.57-23.343a22 22 0 0 0-6.774-14.535z" fill="#5B4A2F" />
                <ellipse fill="#3F321D" cx="139.065" cy="30.383" rx="2.128" ry="1.688" />
                <ellipse fill="#3F321D" transform="rotate(-10 98.52 58.755)" cx="98.519" cy="58.755" rx="3.482" ry="2.761" />
              </g>
              <g transform="translate(98.442 179)">
                <ellipse fill="#3F321D" transform="rotate(6 8 18.005)" cx="8" cy="18.005" rx="7" ry="4.5" />
                <path d="M13.007 0c-.072 3.605-.637 6.476-1.693 8.612-1.057 2.136-1.99 4.599-2.796 7.388" stroke="#F69483" strokeWidth="6" strokeLinecap="round" />
              </g>
              <g transform="matrix(-1 0 0 1 198.783 240.077)">
                <ellipse fill="#3F321D" transform="rotate(6 8 9.005)" cx="8" cy="9.005" rx="7" ry="4.5" />
                <ellipse fill="#3F321D" transform="rotate(2 24.833 10.896)" cx="24.833" cy="10.896" rx="7" ry="4.5" />
                <path d="M24.833 8.224c-1.568-4.056-3.54-6.43-5.916-7.12C13.936-.346 10.47 1.62 8.518 7" stroke="#F69483" strokeWidth="6" strokeLinecap="round" />
              </g>
              <path d="M209.358 168.852c1.841 0 1.841 13.184 0 39.55-.039 2.262-.979 3.393-2.82 3.393-1.84 0-2.742-1.13-2.702-3.393 1.84-26.366 3.681-39.55 5.522-39.55zM203.258 146.849c1.343 0 0 11.595-.617 34.392-.152 5.63-.152 15.64 0 30.031.073 2.074-.811 3.11-2.652 3.11-1.841 0-2.798-1.036-2.87-3.11 2.251-42.949 4.298-64.423 6.139-64.423z" fill="#26C281" />
              <path d="M197.124 159.164c-1.343 0-.617-.72 0 22.077.153 5.63.153 15.64 0 30.031-.072 2.074.812 3.11 2.653 3.11 1.84 0 2.798-1.036 2.87-3.11-1.84-34.738-3.682-52.108-5.523-52.108z" fill="#2DDC93" />
              <path d="M178.724 163.923c-1.84 0-3.05 7.786-3.627 23.356.04 2.263.98 3.394 2.82 3.394 1.842 0 2.742-1.131 2.703-3.394-.493-5.28-.75-8.974-.77-11.079-.077-8.01.195-12.277-1.126-12.277zM183.193 139.67c-1.343 0-1.054-.617-.437 22.18.152 5.63-.161 15.063-.941 28.3-.073 2.073.811 3.11 2.652 3.11 1.841 0 2.798-1.037 2.87-3.11-.922-33.653-2.303-50.48-4.144-50.48z" fill="#26C281" />
              <path d="M187.993 161.85c1.344 0 .617 5.257 0 18.26a623.21 623.21 0 0 1-.662 11.376c.073 1.183-.811 1.774-2.652 1.774-1.841 0-2.798-.591-2.87-1.774 2.282-19.758 4.344-29.637 6.184-29.637z" fill="#2DDC93" />
              <g>
                <path d="M88.416 204.39c1.653-15.35.516-29.646-3.408-42.886-2.512-8.474-14.324-26.195-22.249-44.356-2.97-6.81-6.085-17.088-9.343-30.835" stroke="#2ACEA0" strokeWidth="7" strokeLinecap="round" />
                <path d="M70.75 94.233c.711 6.52.711 11.609 0 15.266-.712 3.656-2.692 8.745-5.941 15.265" stroke="#2ACEA0" strokeWidth="3" strokeLinecap="round" />
                <path d="M67.152 161.049c3.056 5.803 5.902 10.022 8.537 12.655 2.635 2.634 7.122 5.745 13.462 9.334" stroke="#2ACEA0" strokeWidth="4" strokeLinecap="round" />
                <path d="M71.161 99.112c2.679.047 4.867-3.621 4.914-6.3.047-2.678-2.535-8.691-4.914-8.733-2.378-.041-4.738 5.886-4.785 8.564-.047 2.678 2.107 6.423 4.785 6.47zM66.8 162.145c2.587-.693 3.68-4.823 2.986-7.41-.693-2.588-4.832-7.656-7.13-7.04-2.298.615-2.933 6.963-2.24 9.55.693 2.588 3.796 5.593 6.383 4.9zM55.09 86.796c-.281.203-.594.353-.93.458-.82.313-1.664.394-2.443.125a2.929 2.929 0 0 1-.276-.11c-1.574-.363-3.134-1.266-4.04-2.346-1.723-2.052-3.83-8.074-2.007-9.603 1.1-.923 3.685-.252 5.94.877 1.592-1.935 3.652-3.589 5.029-3.115 2.249.774 2.846 7.291 1.974 9.824-.5 1.455-1.774 3.002-3.247 3.89z" fill="#2DDF95" />
              </g>
              <g>
                <path d="M158.641 204.39c-1.652-15.35-.516-29.646 3.408-42.886 2.512-8.474 14.325-26.195 22.249-44.356 2.971-6.81 6.085-17.088 9.343-30.835" stroke="#2ACEA0" strokeWidth="7" strokeLinecap="round" />
                <path d="M176.308 94.233c-.712 6.52-.712 11.609 0 15.266.711 3.656 2.692 8.745 5.94 15.265" stroke="#2ACEA0" strokeWidth="3" strokeLinecap="round" />
                <path d="M179.905 161.049c-3.056 5.803-5.901 10.022-8.536 12.655-2.635 2.634-7.122 5.745-13.462 9.334" stroke="#2ACEA0" strokeWidth="4" strokeLinecap="round" />
                <path d="M175.896 99.112c-2.678.047-4.867-3.621-4.914-6.3-.047-2.678 2.535-8.691 4.914-8.733 2.379-.041 4.739 5.886 4.786 8.564.046 2.678-2.108 6.423-4.786 6.47zM180.258 162.145c-2.588-.693-3.68-4.823-2.987-7.41.693-2.588 4.833-7.656 7.13-7.04 2.299.615 2.934 6.963 2.24 9.55-.693 2.588-3.796 5.593-6.383 4.9zM191.968 86.796c.28.203.594.353.93.458.82.313 1.663.394 2.442.125.095-.032.187-.07.276-.11 1.574-.363 3.135-1.266 4.041-2.346 1.722-2.052 3.83-8.074 2.007-9.603-1.1-.923-3.686-.252-5.94.877-1.592-1.935-3.653-3.589-5.03-3.115-2.249.774-2.846 7.291-1.974 9.824.501 1.455 1.775 3.002 3.248 3.89z" fill="#2DDF95" />
              </g>
              <g>
                <path d="M81.718 46.774c14.598 15.797 23.776 28.234 27.532 37.313 13.213 31.935 26.775 42.302 28.746 50.995 2.812 12.4 2.812 31.248 0 56.544" stroke="#03A678" strokeWidth="10" strokeLinecap="round" />
                <path d="M112.36 92.652c-.942 1.061 4.394-14.348 7.563-29.156 2.371-11.08 2.288-22.218 4.218-23.722" stroke="#03A678" strokeWidth="6" />
                <path d="M90.842 58.737c11.084-7.76 17.19-18.164 9.429-29.248C95.097 22.099 78.434 12.54 50.281.81c1.394 30.466 4.678 49.394 9.852 56.783 7.76 11.084 19.625 8.904 30.71 1.143zM120.45 44.179c8.129 1.433 15.25-.42 16.684-8.55.956-5.42-2.109-16.731-9.193-33.935-12.541 13.743-19.29 23.325-20.246 28.744-1.433 8.13 4.625 12.307 12.755 13.74z" fill="#26C281" />
                <path d="M95.25 101.274c2.44 11.8 7.27 21.825 14.486 30.075 7.217 8.25 15.696 13.716 25.435 16.398" stroke="#03A678" strokeWidth="5" strokeLinecap="round" />
                <path d="M96.82 109.73c5.573-1.286 9.614-4.397 8.327-9.97-.858-3.715-5.875-10.1-15.051-19.156-4.279 12.162-5.99 20.1-5.131 23.816 1.286 5.573 6.282 6.597 11.855 5.31z" fill="#26C281" />
              </g>
              <g>
                <path d="M127.253 214.662c-7.844-34.474-9.83-58.666-5.959-72.576 2.683-9.64 11.184-36.133 25.504-79.481" stroke="#26C281" strokeWidth="10" strokeLinecap="round" />
                <path d="M141.224 84.47c12.274 6.253 24.544 6.77 30.798-5.505 4.17-8.182 4.798-27.73 1.886-58.641-26.72 15.813-42.165 27.811-46.334 35.994-6.254 12.274 1.376 21.897 13.65 28.151z" fill="#37D492" />
              </g>
            </g>
          </svg>
        </div>
      );
    case (DONATION_TYPE_VARIABLE):
      return (
        <div className="donation-illustration donation-type-small">
          <svg viewBox="0 0 223 194" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(31 81.175)">
                <path d="M122.605 59.411c-14.04-26.705-24.313-43.206-30.818-49.503C82.028.462 70.853 1.975 67.396 1.2c-13.028-2.92-22.722.824-32.838 6.623-5.142 2.948-9.607 7.272-13.396 12.972-7.38 3.544-12.59 7.806-15.632 12.785-4.965 8.13-6.18 16.74-3.644 25.83C25.119 68.497 43.509 73.04 57.058 73.04s35.398-4.543 65.547-13.629z" fill="#5B4A2F" />
                <ellipse fill="#3F321D" cx="33" cy="32.819" rx="1.734" ry="1.059" />
                <ellipse fill="#3F321D" transform="rotate(-10 47.507 13.52)" cx="47.507" cy="13.521" rx="1.336" ry="1.059" />
              </g>
              <path d="M80.243 33.135a2.863 2.863 0 0 1 4.64-3.357c7.336 10.139 11.872 18.94 13.581 26.476 1.696 7.478 1.696 18.554.054 33.33a2.863 2.863 0 1 1-5.692-.633c1.578-14.196 1.578-24.707.053-31.43-1.511-6.667-5.714-14.82-12.636-24.386z" fill="#03A678" fillRule="nonzero" />
              <path d="M98.52 67.96l-3.28-1.024c1.963-6.282 5.335-11.303 10.102-15.016l2.112 2.71c-4.202 3.273-7.175 7.7-8.935 13.33z" fill="#03A678" fillRule="nonzero" />
              <path d="M82.806 33.415c6.348-4.444 9.844-10.402 5.4-16.75C85.243 12.436 75.701 6.96 59.579.244c.798 17.447 2.678 28.286 5.641 32.517 4.445 6.348 11.24 5.1 17.586.655zM105.18 55.336c2.588 2.776 5.716 4.066 8.492 1.477 1.85-1.725 3.855-6.727 6.014-15.004-8.408 1.576-13.537 3.227-15.387 4.953-2.776 2.588-1.707 5.798.881 8.574z" fill="#26C281" />
              <g transform="translate(0 105.5)">
                <path d="M220.39 12.993v58.85c-56.25 14.74-101.263 19.344-135.038 13.814C34.69 77.363 18.722 64.6 12.559 55.728 6.397 46.856-4.682 26.592 4.143 19.593c8.826-6.999 16.93-4.631 22.9 1.91 3.981 4.36 8.314 9.431 12.998 15.214 5.877-1.551 14.172-2.327 24.887-2.327 10.716 0 24.774.776 42.175 2.327-27.118-4.47-42.917-9.542-47.397-15.215-6.721-8.509-3.798-15.9 1.733-18.359C66.969.683 115.964 0 124.713 0c8.749 0 21.147 4.539 40.105 10.946 12.639 4.272 31.163 4.954 55.573 2.047z" fill="#299C7B" />
                <path d="M23.632 18.751c2.098 1.31 4.214 3.026 6.348 5.147 2.133 2.12 5.487 6.394 10.061 12.82 4.87-1.062 8.442-1.7 10.719-1.915 6.74-.637 12.42-.83 18.007-.83 8.418 0 16.896.386 25.433 1.157-7.014-1.82-12.531-3.31-16.551-4.47-9.063-2.616-14.9-5.491-16.763-7.654-2.351-2.73-3.532-4.495-3.542-5.295 2.73-1.84 6.02-2.76 9.873-2.76 15.458 0 28.504 4.665 35.059 6.551 13.026 3.75 23.036 8.805 23.036 14.296s1.1 10.982-14.13 14.383c-15.229 3.402-48.727 7.047-60.422 3.97-5.657-1.488-16.993-6.485-22.121-15.02-4.492-7.474-6.162-14.268-5.007-20.38z" fill="#FADF7E" />
                <rect fill="#FADF7E" x="218.508" y="10.946" width="3.765" height="63.482" rx="1.883" />
              </g>
            </g>
          </svg>
        </div>
      );
    default:
      return null;
  }
};
