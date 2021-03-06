import React from 'react';
import './ColourfulBackground.scss';

export const RECT_BACKGROUND_TYPE = 'RECT_BACKGROUND_TYPE';
const rectBackgrounds = [
  (
    <svg viewBox="0 0 575 500" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path className="background-fill" d="M288 494.258c-98.59 0-201.668-13.562-253.582-80.844C2.578 372.15 0 291.612 0 237.758 0 96.097 7.262 0 166.32 0 231.84 0 333.816 100.828 424.06 125.055 497.675 144.818 576 154.449 576 237.758c0 89.289-68.193 144.789-145.898 190.726-45.578 26.945-83.298 65.774-142.102 65.774z" fill="#E8F4EF" />
        <path className="petal" d="M362.7 479.552c-6.461-4.525-10.021-10.59-5.497-17.052 3.017-4.308 12.732-9.881 29.145-16.72-.813 17.763-2.727 28.798-5.744 33.106-4.524 6.462-11.441 5.19-17.903.666z" fill="#26C281" />
        <path className="petal" d="M100.69 45.002c-4.82 2.672-9.719 3.05-12.39-1.77-1.781-3.214-2.306-11.02-1.573-23.419 10.903 5.95 17.246 10.53 19.027 13.744 2.671 4.82-.245 8.773-5.065 11.445z" fill="#03A678" />
      </g>
    </svg>
  ),
  (
    <svg viewBox="0 0 575 500" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path className="background-fill" d="M288 498.258c-98.59 0-201.668-13.562-253.582-80.844C2.578 376.15 0 295.612 0 241.758 0 100.097 95.094 0 254.152 0c65.519 0 65.519 78.918 155.762 103.145C483.531 122.908 576 158.449 576 241.758c0 89.289-68.193 144.789-145.898 190.726-45.578 26.945-83.298 65.774-142.102 65.774z" fill="#E8F4EF" />
        <path className="petal" d="M168.74 70.725c-6.463-4.525-10.023-10.59-5.498-17.052 3.016-4.308 12.731-9.881 29.144-16.72-.812 17.763-2.726 28.798-5.743 33.106-4.525 6.462-11.442 5.19-17.904.666z" fill="#26C281" />
        <path className="petal" d="M122.273 41.355c-4.82 2.672-9.718 3.05-12.39-1.77-1.78-3.213-2.305-11.02-1.572-23.419 10.903 5.95 17.245 10.53 19.026 13.744 2.672 4.82-.244 8.774-5.064 11.445z" fill="#03A678" />
      </g>
    </svg>
  ),
];

export const SQUARE_BACKGROUND_TYPE = 'SQUARE_BACKGROUND_TYPE';
const squareBackgrounds = [
  (
    <svg viewBox="0 0 269 234" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path className="background-fill" d="M134.25 233.828c45.872 0 93.831-6.31 117.986-37.615 14.815-19.2 16.014-56.672 16.014-81.728C268.25 48.573 224.005 2 149.999 2c-30.485 0-30.485 36.719-72.473 47.99C43.274 59.187.25 75.724.25 114.486c0 41.544 31.729 67.367 67.883 88.74 21.207 12.537 38.757 30.603 66.117 30.603z" fill="#E8F4EF" />
        <path className="petal" d="M32.197 179.927c5.84-4.09 9.057-9.571 4.968-15.412-2.726-3.893-11.506-8.93-26.34-15.11.734 16.053 2.464 26.026 5.19 29.92 4.09 5.84 10.341 4.691 16.182.602z" fill="#26C281" />
        <path className="petal" d="M215.122 23.328c4.321 2.395 8.713 2.733 11.108-1.587 1.596-2.881 2.066-9.88 1.41-20.995-9.775 5.333-15.461 9.44-17.058 12.321-2.395 4.321.22 7.866 4.54 10.26z" fill="#03A678" />
      </g>
    </svg>
  ),
  (
    <svg viewBox="0 0 250 231" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path className="background-fill" d="M98.75 231c45.872 0 94.331-9.47 118.486-40.775 14.815-19.2 29.796-69.516 32.014-94.475 5.674-63.844-66-80.26-112.467-75.25-30.293 3.266-48.914-11.272-90.902 0C11.63 29.695.25 64.53.25 103.291c0 41.544 3.904 57.835 40.059 79.209C61.515 195.037 71.39 231 98.75 231z" fill="#E8F4EF" />
        <path className="petal" d="M55.947 30.751c5.84-4.09 9.057-9.57 4.968-15.411-2.726-3.894-11.506-8.93-26.34-15.11.734 16.052 2.464 26.025 5.19 29.919 4.09 5.84 10.341 4.692 16.182.602z" fill="#26C281" />
        <path className="petal" d="M177.824 226.663c4.32 2.395 8.712 2.734 11.107-1.587 1.597-2.88 2.067-9.879 1.41-20.994-9.775 5.333-15.46 9.44-17.057 12.32-2.395 4.322.219 7.866 4.54 10.261z" fill="#03A678" />
      </g>
    </svg>
  ),
  (
    <svg viewBox="0 0 269 235" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path className="background-fill" d="M61 191.5c-14.814-19.2-53.86-30.617-59.75-86.75C-5.52 40.224 83.558-4.01 130.025 1c30.293 3.266 50.606 17.228 92.594 28.5 34.252 9.195 45.631 44.03 45.631 82.791 0 41.544-20.934 46.983-40.059 79.209C181 271.017 85.155 222.805 61 191.5z" fill="#E8F4EF" />
        <path className="petal" d="M44.522 180.352c-4.09 5.84-9.571 9.057-15.412 4.968-3.893-2.726-8.93-11.507-15.11-26.34 16.053.734 26.026 2.464 29.92 5.19 5.84 4.09 4.691 10.341.602 16.182z" fill="#26C281" />
        <path className="petal" d="M248.23 84.996c-4.361-2.32-7.037-5.818-4.718-10.18 1.546-2.908 7.16-7.113 16.84-12.616.85 11.102.503 18.107-1.043 21.015-2.32 4.362-6.716 4.1-11.078 1.781z" fill="#03A678" />
      </g>
    </svg>
  ),
];

export const SMALL_SQUARE_BACKGROUND_TYPE = 'SMALL_SQUARE_BACKGROUND_TYPE';
const smallSquareBackgrounds = [
  (
    <svg viewBox="0 0 171 155" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g fill="#E8F4EF">
          <g>
            <path d="M94.698 155c22.638 0 34.972-4.204 50.236-18.6 16.483-15.545 25.566-26.706 25.566-51.15 0-15.925-12.491-22.897-20.092-35.65C135.536 24.649 116.407 0 85.25 0c-23.552 0-34.171 15.56-49.6 31C20.236 46.425 0 61.72 0 85.25c0 30.269 11.873 36.023 35.65 51.15 13.208 8.402 42.235 18.6 59.048 18.6z" />
          </g>
        </g>
      </g>
    </svg>
  ),
  (
    <svg viewBox="0 0 171 134" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g fill="#E8F4EF">
          <path d="M115.46 133.264c-22.637 0-74.63 3.796-89.894-10.6C9.083 107.12 0 95.958 0 71.514c0-15.925 19.074-58.25 50.23-58.25 23.553 0 76.056-23.44 91.485-8 15.414 15.426 28.785 42.72 28.785 66.25 0 30.27-38.226 61.75-55.04 61.75z" />
        </g>
      </g>
    </svg>
  ),
  (
    <svg viewBox="0 0 171 134" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g fill="#E8F4EF">
          <path d="M55.04 133.264c22.637 0 74.63 3.796 89.894-10.6 16.483-15.544 25.566-26.706 25.566-51.15 0-15.925-19.074-58.25-50.23-58.25-23.553 0-76.056-23.44-91.485-8C13.371 20.69 0 47.984 0 71.514c0 30.27 38.226 61.75 55.04 61.75z" />
        </g>
      </g>
    </svg>
  ),
];

const ColourfulBackground = (props) => {
  const {
    index,
    inverted,
    backgroundType,
  } = props;
  let backgrounds = rectBackgrounds;
  switch (backgroundType) {
    case (RECT_BACKGROUND_TYPE):
      backgrounds = rectBackgrounds;
      break;
    case (SQUARE_BACKGROUND_TYPE):
      backgrounds = squareBackgrounds;
      break;
    case (SMALL_SQUARE_BACKGROUND_TYPE):
      backgrounds = smallSquareBackgrounds;
      break;
    default:
      backgrounds = rectBackgrounds;
      break;
  }
  const backgroundIndex = (index % backgrounds.length);
  return (
    <div className={`colourful-background${inverted ? ' inverted' : ''}`}>
      {backgrounds[backgroundIndex]}
    </div>
  );
};

export default ColourfulBackground;
