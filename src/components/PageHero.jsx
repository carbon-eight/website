import React from 'react';
import { Wrapper } from './common';
import './PageHero.scss';

const SvgBackground = ({ isMobile }) => (
  isMobile ? (
    <svg viewBox="0 0 361 623" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M305.993 621.072c-1.454-2.096-.95-4.897 1.126-6.257 2.076-1.36 4.937-.764 6.391 1.332 1.454 2.096-.693 2.53-2.769 3.89-2.076 1.36-3.294 3.131-4.748 1.035z" fill="#5B4A2F" />
        <path d="M360.365 350.883c2.11-3.248 1.156-7.745-2.133-10.044-3.288-2.298-7.665-1.528-9.775 1.72-2.11 3.249 1.229 4.075 4.517 6.373 3.289 2.3 5.28 5.2 7.391 1.951z" fill="#5B4A2F" />
        <path d="M241.73 44.772c.932-3.054 2.001-5.73 3.203-8.026.638-1.217 1.9-2.934 4.054-5.565.617-.754 5.195-6.223 6.634-7.995 2.308-2.843 4.215-5.338 5.9-7.77 2.403-3.464 5.216-8.76 8.465-15.911a1.919 1.919 0 0 0-.97-2.542 1.935 1.935 0 0 0-2.556.955c-3.163 6.961-5.88 12.075-8.126 15.315-.17.245-.342.49-.517.738-.395-1.877-.593-3.414-.595-4.605-.003-1.947.515-4.611 1.56-7.974a.824.824 0 0 0-.547-1.03.827.827 0 0 0-1.036.54c-1.09 3.507-1.638 6.321-1.634 8.462.003 1.62.322 3.746.957 6.39a146.862 146.862 0 0 1-3.915 5.017c-1.417 1.744-5.987 7.205-6.624 7.983-2.316 2.829-3.685 4.691-4.482 6.213-3.646 6.965-6.081 16.873-7.35 29.753a1.93 1.93 0 0 0 1.737 2.103A1.924 1.924 0 0 0 238 65.105c.669-6.785 1.664-12.685 2.981-17.695 2.934-1.056 5.14-2.079 6.633-3.082 1.803-1.212 3.848-3.257 6.162-6.142.379-.472.3-1.166-.175-1.548a1.099 1.099 0 0 0-1.547.163c-2.188 2.728-4.089 4.629-5.678 5.697-1.07.72-2.622 1.48-4.647 2.274z" fill="#2ACEA0" fillRule="nonzero" />
        <path d="M257.257 3.73c-1.458-.257-2.261-2.463-2.006-3.91.255-1.446 2.284-4.41 3.58-4.182 1.294.228 1.954 3.668 1.7 5.114-.256 1.447-1.816 3.235-3.274 2.978z" fill="#2DDF95" />
        <path d="M253.028 38.121c-1.331-.646-1.492-2.984-.845-4.304.647-1.32 3.423-3.611 4.605-3.038 1.182.574.862 4.058.215 5.378-.647 1.32-2.644 2.61-3.975 1.964z" fill="#2DDF95" />
        <path d="M267.264-1.205c.131.139.286.253.457.344.412.256.861.388 1.312.326.054-.008.108-.018.161-.031.892-.029 1.833-.35 2.438-.836 1.149-.924 2.922-3.943 2.093-4.958-.5-.613-1.973-.524-3.314-.155-.661-1.21-1.606-2.317-2.402-2.207-1.301.18-2.307 3.625-2.1 5.08.12.836.65 1.803 1.355 2.437z" fill="#2DDF95" />
        <g fill="#03A678">
          <path d="M24.02 113.653c4.896-3.364 7.593-7.874 4.165-12.68C25.9 97.77 18.54 93.627 6.106 88.542c.616 13.208 2.066 21.413 4.351 24.617 3.428 4.805 8.668 3.86 13.564.495z" />
        </g>
        <g>
          <path d="M40.022 593.334a59.374 59.374 0 0 0-7.678-6.291c-1.28-.88-3.448-1.93-6.987-3.42-1.014-.428-8.471-3.477-10.844-4.488-3.805-1.622-7.027-3.108-9.995-4.648-4.23-2.193-9.842-5.997-16.876-11.425a2.173 2.173 0 0 1 2.657-3.44c6.846 5.283 12.266 8.957 16.222 11.008.299.155.6.31.906.464-.607-2.08-1.229-3.719-1.86-4.909-1.034-1.945-2.966-4.331-5.795-7.137a.93.93 0 0 1 1.312-1.322c2.95 2.926 4.991 5.447 6.127 7.585.86 1.617 1.674 3.908 2.451 6.882a166.6 166.6 0 0 0 6.558 2.945c2.336.996 9.781 4.04 10.827 4.48 3.807 1.605 6.157 2.743 7.76 3.843 7.307 5.017 13.636 11.676 18.983 19.957a2.173 2.173 0 0 1-3.65 2.36c-2.438-3.776-5.083-7.184-7.935-10.226-3.601.52-6.425.677-8.493.46-2.444-.256-5.573-1.213-9.418-2.863a1.242 1.242 0 0 1 .98-2.283c3.635 1.56 6.544 2.45 8.697 2.676 1.492.156 3.513.088 6.051-.208z" fill="#2ACEA0" fillRule="nonzero" />
          <path d="M2.532 560.579c1.31-1.024.934-3.648-.089-4.958-1.023-1.31-4.617-3.2-5.781-2.29-1.164.909.011 4.69 1.034 5.999 1.024 1.31 3.525 2.273 4.836 1.249z" fill="#2DDF95" />
          <path d="M25.038 592.676c.978-1.345-.107-3.763-1.452-4.74-1.345-.977-5.321-1.803-6.19-.608-.868 1.195 1.304 4.504 2.649 5.48 1.345.977 4.015 1.214 4.993-.132z" fill="#2DDF95" />
          <path d="M-10.033 560.921a1.986 1.986 0 0 1-.27.584c-.273.472-.65.84-1.13 1.015a1.82 1.82 0 0 1-.177.055c-.9.44-2.006.615-2.865.448-1.632-.317-5-2.397-4.718-3.846.17-.875 1.68-1.562 3.209-1.899.012-1.555.361-3.158 1.21-3.467 1.388-.505 4.221 2.403 4.79 3.965.326.897.315 2.141-.05 3.145z" fill="#2DDF95" />
        </g>
      </g>
    </svg>
  ) : (
    <svg viewBox="0 0 1376 740" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g>
          <path d="M95.42 572.142a95.768 95.768 0 0 0-12.373-10.14c-2.063-1.419-5.556-3.11-11.258-5.516-1.634-.69-13.649-5.607-17.472-7.238-6.13-2.616-11.321-5.013-16.105-7.495-6.815-3.537-15.859-9.67-27.193-18.42a3.5 3.5 0 0 1 4.278-5.54c11.032 8.516 19.766 14.44 26.14 17.747.481.25.968.499 1.46.748-.98-3.353-1.982-5.993-3.001-7.911-1.666-3.134-4.78-6.98-9.34-11.503a1.5 1.5 0 0 1 2.114-2.13c4.754 4.717 8.044 8.78 9.875 12.225 1.385 2.607 2.699 6.299 3.953 11.09 3.22 1.542 6.696 3.1 10.566 4.75 3.763 1.606 15.76 6.516 17.446 7.227 6.132 2.587 9.92 4.422 12.501 6.195 11.775 8.09 21.975 18.822 30.596 32.17a3.5 3.5 0 1 1-5.88 3.798c-3.93-6.086-8.194-11.579-12.791-16.483-5.8.836-10.348 1.085-13.68.736-3.94-.413-8.983-1.955-15.18-4.615a2 2 0 0 1 1.578-3.675c5.859 2.514 10.548 3.948 14.019 4.312 2.403.252 5.658.143 9.747-.332z" fill="#2ACEA0" fillRule="nonzero" />
          <path d="M35.004 519.342c2.11-1.649 1.503-5.877-.146-7.988-1.65-2.11-7.44-5.16-9.315-3.695-1.875 1.465.021 7.557 1.67 9.668 1.65 2.11 5.68 3.665 7.79 2.015z" fill="#2DDF95" />
          <path d="M71.282 571.073c1.574-2.167-.175-6.064-2.343-7.638-2.167-1.575-8.573-2.91-9.972-.984-1.398 1.924 2.103 7.257 4.27 8.832 2.168 1.574 6.47 1.957 8.045-.21z" fill="#2DDF95" />
          <path d="M14.762 519.885c-.09.334-.238.649-.434.94-.44.76-1.045 1.354-1.82 1.636a2.929 2.929 0 0 1-.284.087c-1.45.71-3.232.99-4.616.72-2.63-.51-8.056-3.864-7.603-6.2.275-1.41 2.706-2.515 5.169-3.056.019-2.506.58-5.088 1.947-5.586 2.236-.813 6.801 3.875 7.718 6.392.526 1.446.51 3.45-.077 5.067z" fill="#2DDF95" />
        </g>
        <g>
          <path d="M1151.992 98.358c1.696-5.563 3.636-10.44 5.816-14.626 1.157-2.22 3.446-5.354 7.352-10.155 1.12-1.376 9.419-11.358 12.028-14.593 4.185-5.188 7.643-9.741 10.702-14.179 4.357-6.322 9.462-15.983 15.362-29.03a3.5 3.5 0 0 0-6.379-2.884c-5.742 12.7-10.673 22.03-14.747 27.942-.308.447-.62.895-.938 1.346-.71-3.42-1.064-6.221-1.064-8.394-.001-3.549.943-8.407 2.845-14.54a1.5 1.5 0 0 0-2.865-.889c-1.984 6.396-2.981 11.528-2.98 15.43 0 2.952.574 6.828 1.716 11.649-2.12 2.872-4.458 5.879-7.1 9.154-2.569 3.184-10.856 13.152-12.01 14.57-4.2 5.164-6.684 8.563-8.13 11.34-6.617 12.705-11.051 30.776-13.38 54.26a3.5 3.5 0 0 0 6.965.69c1.229-12.386 3.05-23.155 5.45-32.3 5.306-1.93 9.3-3.796 12.008-5.62 3.284-2.215 7.013-5.944 11.236-11.201a2 2 0 0 0-3.119-2.505c-3.992 4.97-7.46 8.437-10.353 10.388-1.943 1.31-4.752 2.697-8.415 4.147z" fill="#2ACEA0" fillRule="nonzero" />
          <path d="M1180.201 23.512c-2.638-.465-4.086-4.484-3.621-7.122.465-2.638 4.147-8.048 6.49-7.635 2.343.413 3.529 6.681 3.063 9.32-.465 2.638-3.294 5.902-5.932 5.437z" fill="#2DDF95" />
          <path d="M1172.456 86.219c-2.408-1.175-2.693-5.437-1.518-7.844 1.174-2.408 6.205-6.594 8.343-5.551 2.138 1.043 1.55 7.395.376 9.803-1.174 2.408-4.793 4.766-7.201 3.592z" fill="#2DDF95" />
          <path d="M1198.328 14.488c.237.253.515.46.825.627.745.464 1.558.704 2.374.59.099-.014.196-.033.292-.057 1.615-.055 3.318-.644 4.414-1.53 2.082-1.687 5.3-7.196 3.802-9.045-.904-1.116-3.57-.95-5.998-.272-1.193-2.204-2.9-4.22-4.342-4.018-2.356.331-4.186 6.615-3.813 9.267.214 1.524 1.17 3.285 2.446 4.438z" fill="#2DDF95" />
        </g>
        <g fill="#5B4A2F">
          <path d="M1367.594 360.808c6.657-2.69 9.873-10.267 7.183-16.924-2.69-6.657-10.266-9.873-16.923-7.183-6.657 2.69-2.35 7.227.339 13.884 2.69 6.657 2.744 12.912 9.4 10.223z" />
        </g>
        <g fill="#5B4A2F">
          <path d="M326.856 138.906c-3.382 2.308-7.943 1.448-10.188-1.92-2.245-3.368-1.323-7.969 2.058-10.277 3.381-2.307 4.122 1.16 6.366 4.528 2.245 3.368 5.145 5.362 1.764 7.67z" />
        </g>
        <g fill="#5B4A2F">
          <path d="M1171.425 738.389c-1.857-2.774-1.11-6.553 1.671-8.442 2.78-1.888 6.54-1.171 8.397 1.602 1.857 2.774-.99 3.42-3.77 5.308-2.78 1.889-4.44 4.305-6.298 1.532z" />
        </g>
        <g fill="#03A678">
          <path d="M496.873 85.82c6.462-4.525 10.022-10.59 5.497-17.053-3.017-4.308-12.731-9.88-29.144-16.719.812 17.762 2.726 28.797 5.743 33.105 4.525 6.462 11.442 5.191 17.904.667z" />
        </g>
      </g>
    </svg>
  )
);

const scrollToForm = (event) => {
  if (event) event.preventDefault();
  const targetEl = document.getElementById('contact-form');
  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const PageHero = (props) => {
  const {
    title,
    subtitle,
    isMobile,
  } = props;
  return (
    <section className="page-hero page-block">
      <div className="top">
        <Wrapper>
          <h1 className="title">{title}</h1>
          <span className="subtitle">{subtitle}</span>
          <button
            type="button"
            className="anchor-to-button cta-button"
            onClick={event => scrollToForm(event)}
            aria-label="Zoom down to the contact form"
          >
            <span>Get Started</span>
          </button>
        </Wrapper>
      </div>
      <div className="bottom-curve">
        <svg viewBox="0 0 1600 94" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 .5h1600v70.267C1525.49 85.922 1420.591 93.5 1285.305 93.5 974.323 93.5 800 4.712 465.25 4.712 263.615 4.712 108.531 26.731 0 70.767V.5z" fill="#E8F4EF" fillRule="evenodd" />
        </svg>
      </div>
      <div className="svg-background">
        <SvgBackground isMobile={isMobile} />
      </div>
    </section>
  );
};

export default PageHero;
