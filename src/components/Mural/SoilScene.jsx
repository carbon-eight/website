import React from 'react';
import './SoilScene.scss';

const SoilScene = (props) => {
  const {
    isSmallMobile,
  } = props;
  const stateClasses = `${isSmallMobile ? ' mobile' : ''}`;
  return (
    <section
      className={`soil-scene${stateClasses}`}
    >
      { isSmallMobile ? (
        <div className="bees">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 360 175">
            <defs>
              <path id="bees-a" d="M0 0h360v175H0z" />
              <path id="bees-c" d="M4.811 5.308a2.654 2.654 0 0 0 0-5.308C3.834 0 2.231.885 0 2.654c2.23 1.77 3.834 2.654 4.811 2.654z" />
              <path id="bees-e" d="M4.811 5.308a2.654 2.654 0 0 0 0-5.308C3.834 0 2.231.885 0 2.654c2.23 1.77 3.834 2.654 4.811 2.654z" />
            </defs>
            <g fill="none" fillRule="evenodd">
              <mask id="bees-b" fill="#fff">
                <use xlinkHref="#bees-a" />
              </mask>
              <use xlinkHref="#bees-a" />
              <g mask="url(#bees-b)">
                <g transform="translate(13.51 32.097)">
                  <g id="bee-two">
                    <circle cx="8.441" cy="8.399" r="1.688" fill="#4F4F4F" />
                    <g transform="translate(0 5.745)">
                      <mask id="bees-d" fill="#fff">
                        <use xlinkHref="#bees-c" />
                      </mask>
                      <use fill="#D8D264" xlinkHref="#bees-c" />
                      <path fill="#4F4F4F" d="M2.64-.483h1.448v6.756H2.64z" mask="url(#bees-d)" />
                    </g>
                    <path fill="#FFF" d="M5.824 2.224a2.654 2.654 0 0 0-3.753 0C1.034 3.261 2.668 4.6 3.704 5.636c.691.69 1.906 1.313 3.645 1.867-.326-2.828-.834-4.588-1.525-5.279z" />
                  </g>
                </g>
                <g transform="matrix(-1 0 0 1 341.27 30.616)">
                  <g id="bee-one">
                    <circle cx="8.441" cy="8.399" r="1.688" fill="#4F4F4F" />
                    <g transform="translate(0 5.745)">
                      <mask id="bees-f" fill="#fff">
                        <use xlinkHref="#bees-e" />
                      </mask>
                      <use fill="#D8D264" xlinkHref="#bees-e" />
                      <path fill="#4F4F4F" d="M2.64-.483h1.448v6.756H2.64z" mask="url(#bees-f)" />
                    </g>
                    <path fill="#FFF" d="M5.824 2.224a2.654 2.654 0 0 0-3.753 0C1.034 3.261 2.668 4.6 3.704 5.636c.691.69 1.906 1.313 3.645 1.867-.326-2.828-.834-4.588-1.525-5.279z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div className="bees">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 456">
            <defs>
              <path id="bees-a" d="M0 0h1600v456H0z" />
              <path id="bees-c" d="M12.571 13.87a6.935 6.935 0 1 0 0-13.87C10.018 0 5.828 2.312 0 6.935c5.828 4.623 10.018 6.935 12.571 6.935z" />
              <path id="bees-e" d="M12.571 13.87a6.935 6.935 0 1 0 0-13.87C10.018 0 5.828 2.312 0 6.935c5.828 4.623 10.018 6.935 12.571 6.935z" />
            </defs>
            <g fill="none" fillRule="evenodd">
              <mask id="bees-b" fill="#fff">
                <use xlinkHref="#bees-a" />
              </mask>
              <use xlinkHref="#bees-a" />
              <g mask="url(#bees-b)">
                <g transform="translate(155.5 110)">
                  <g id="bee-two">
                    <circle cx="22.055" cy="21.947" r="4.41" fill="#4F4F4F" />
                    <g transform="translate(0 15.012)">
                      <mask id="bees-d" fill="#fff">
                        <use xlinkHref="#bees-c" />
                      </mask>
                      <use fill="#D8D264" xlinkHref="#bees-c" />
                      <path fill="#4F4F4F" d="M6.898-1.261h3.783v17.652H6.898z" mask="url(#bees-d)" />
                    </g>
                    <path fill="#FFF" d="M15.218 5.812a6.935 6.935 0 0 0-9.807 0c-2.708 2.708 1.56 6.206 4.268 8.914 1.806 1.806 4.98 3.432 9.525 4.88-.852-7.39-2.18-11.988-3.986-13.794z" />
                  </g>
                </g>
                <g transform="matrix(-1 0 0 1 1325.5 80)">
                  <g id="bee-one">
                    <circle cx="22.055" cy="21.947" r="4.41" fill="#4F4F4F" />
                    <g transform="translate(0 15.012)">
                      <mask id="bees-f" fill="#fff">
                        <use xlinkHref="#bees-e" />
                      </mask>
                      <use fill="#D8D264" xlinkHref="#bees-e" />
                      <path fill="#4F4F4F" d="M6.898-1.261h3.783v17.652H6.898z" mask="url(#bees-f)" />
                    </g>
                    <path fill="#FFF" d="M15.218 5.812a6.935 6.935 0 0 0-9.807 0c-2.708 2.708 1.56 6.206 4.268 8.914 1.806 1.806 4.98 3.432 9.525 4.88-.852-7.39-2.18-11.988-3.986-13.794z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </section>
  );
};

export default SoilScene;
