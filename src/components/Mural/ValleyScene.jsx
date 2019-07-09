import React from 'react';
import './ValleyScene.scss';

const ValleyScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  return (
    <section
      className={`valley-scene${isSmallMobile ? ' mobile' : ''}`}
    >
      { isSmallMobile ? (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 360 157">
          <defs>
            <path id="valley-scene-a" d="M0 .305h360v158.448H0z" />
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(0 -2.147)">
            <mask id="valley-scene-b" fill="#fff">
              <use xlinkHref="#valley-scene-a" />
            </mask>
            <g mask="url(#valley-scene-b)">
              <path fill="#97CFDC" d="M80.712 48.332c39.016-25.195 72.451-37.792 100.305-37.792 32.427 0 66.794 17.072 103.102 51.218 15.772-14.447 28.832-24.288 39.18-29.522 13.36-6.758 35.01-12.937 44.646-12.937 68.53 0 114.54 15.862 138.031 47.586l-213.59 2.908a388.93 388.93 0 0 1 4.148 4.227H44.594c8.145-6.284 16.083-12.102 23.814-17.453l-188.245 11.168V31.094C-94.155 11.366-62.54 1.502-24.99 1.502c48.302 0 83.536 15.61 105.702 46.83z" />
              <path fill="#3D676A" d="M-119.837 46.608C-78.745 24.065-38.97 14.005-.511 16.428c56.593 3.564 83.604 30.18 129.238 30.18 51.812 0 40.568-9.885 97.51-9.885 22.119 0 61.338 7.932 109.69 9.885 17.898.723 50.237-9.65 86.925-9.885 19.577-.126 38.931 3.169 58.063 9.885v112.145h-600.752V46.608z" />
            </g>
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 418">
          <defs>
            <path id="valley-scene-a" d="M.434.813h1600v422H.434z" />
            <linearGradient id="valley-scene-c" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#AED1E2" />
              <stop offset="100%" stopColor="#90D9D3" />
            </linearGradient>
            <linearGradient id="valley-scene-d" x1="50%" x2="50%" y1="3.615%" y2="25.602%">
              <stop offset="0%" stopColor="#3D675E" />
              <stop offset="100%" stopColor="#497B6F" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(-.434 -3.813)">
            <mask id="valley-scene-b" fill="#fff">
              <use xlinkHref="#valley-scene-a" />
            </mask>
            <g mask="url(#valley-scene-b)">
              <path fill="url(#valley-scene-c)" d="M680.563 154.724C784.475 87.62 873.523 54.07 947.707 54.07c86.363 0 177.895 45.47 274.595 136.412 42.006-38.478 76.788-64.687 104.346-78.627 35.586-18 93.246-34.457 118.91-34.457 182.517 0 305.057 42.246 367.622 126.738l-568.863 7.745c3.676 3.689 7.36 7.442 11.05 11.26h-671c21.692-16.738 42.834-32.232 63.425-46.484l-501.358 29.744v-97.589C214.834 56.272 299.038 30 399.043 30c128.644 0 222.484 41.574 281.52 124.723z" transform="translate(-146 -26)" />
              <path fill="url(#valley-scene-d)" d="M146.434 150.133C255.877 90.093 361.812 63.3 464.238 69.752c150.727 9.494 222.665 80.381 344.203 80.381 137.993 0 108.047-26.329 259.704-26.329 58.907 0 163.36 21.128 292.14 26.33 47.666 1.925 133.795-25.7 231.508-26.33 52.14-.335 103.687 8.44 154.64 26.33v298.678h-1600V150.134z" transform="translate(-146 -26)" />
            </g>
          </g>
        </svg>
      )}
    </section>
  );
};

export default ValleyScene;
