import React from 'react';
import { getSeededRandom } from '../util/helpers';
import './ColourfulBackground.scss';

const backgrounds = [
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

const ColourfulBackground = (props) => {
  const {
    seed,
    inverted,
  } = props;
  const backgroundIndex = Math.floor(getSeededRandom(seed) * backgrounds.length);
  return (
    <div className={`colourful-background${inverted ? ' inverted' : ''}`}>
      {backgrounds[backgroundIndex]}
    </div>
  );
};

export default ColourfulBackground;
