import React from 'react';
import './DonationSuccess.scss';

const DonationSuccess = (props) => {
  const {
    someProp,
  } = props;
  return (
    <div className="donation-success">
      <p className="donation-success-message">
        <span>You’re an absolute legend!</span>
        <span>Thanks for your contribution.</span>
      </p>
      <div className="success-illustration">
        <svg viewBox="0 0 479 459" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g className="success-background">
              <path d="M249.5 436.203c74.19 0 130.115-32.046 171.266-78.683 31.756-35.992 57.734-79.014 57.734-133.02 0-33.308-19.626-60.515-33.422-88.941C407.518 58.169 336.633 0 240.5 0c-47.628 0-90.21 58.065-127.418 80.793C47.604 120.79 2.5 145.439 2.5 224.5c0 61.031 5.878 116.768 49.988 154.086 45.502 38.496 130.27 57.617 197.012 57.617z" fill="#E8F4EF" />
            </g>
            <g className="success-background-bits">
              <path d="M369.542 128.035c1.696-5.563 3.636-10.439 5.817-14.626 1.156-2.22 3.446-5.354 7.351-10.155 1.12-1.376 9.42-11.358 12.029-14.593 4.185-5.188 7.643-9.741 10.7-14.179 4.358-6.322 9.464-15.983 15.363-29.03a3.5 3.5 0 0 0-6.378-2.884c-5.743 12.7-10.674 22.03-14.748 27.942-.308.447-.62.895-.938 1.346-.71-3.42-1.064-6.221-1.064-8.394 0-3.549.943-8.407 2.845-14.54a1.5 1.5 0 0 0-2.865-.889c-1.983 6.396-2.981 11.528-2.98 15.43 0 2.952.574 6.828 1.716 11.649-2.12 2.872-4.457 5.879-7.1 9.154-2.568 3.184-10.856 13.152-12.01 14.57-4.2 5.164-6.683 8.563-8.13 11.34-6.617 12.705-11.05 30.776-13.38 54.26a3.5 3.5 0 0 0 6.965.69c1.229-12.386 3.05-23.155 5.45-32.3 5.306-1.93 9.3-3.796 12.008-5.62 3.284-2.215 7.014-5.944 11.236-11.201a2 2 0 0 0-3.119-2.505c-3.992 4.97-7.459 8.437-10.353 10.389-1.943 1.31-4.752 2.696-8.415 4.146z" fill="#2ACEA0" fillRule="nonzero" />
              <path d="M397.752 53.189c-2.638-.465-4.087-4.484-3.622-7.122.465-2.638 4.147-8.048 6.49-7.635 2.343.413 3.529 6.681 3.064 9.32-.465 2.638-3.294 5.902-5.932 5.437zM390.006 115.896c-2.408-1.175-2.692-5.437-1.518-7.844 1.174-2.408 6.205-6.594 8.343-5.55 2.138 1.042 1.55 7.394.376 9.802-1.174 2.408-4.793 4.766-7.2 3.592zM415.878 44.165c.237.253.516.46.825.627.746.464 1.558.704 2.374.59.1-.014.197-.033.293-.057 1.614-.055 3.318-.643 4.414-1.53 2.081-1.687 5.299-7.196 3.802-9.045-.904-1.116-3.57-.95-5.999-.272-1.193-2.204-2.9-4.22-4.342-4.018-2.355.331-4.185 6.615-3.813 9.267.215 1.524 1.17 3.285 2.446 4.438z" fill="#2DDF95" />
              <path d="M95.399 141.303a95.768 95.768 0 0 0-12.373-10.141c-2.063-1.418-5.556-3.11-11.258-5.515-1.634-.69-13.649-5.607-17.472-7.238-6.13-2.616-11.321-5.013-16.105-7.495-6.815-3.537-15.858-9.67-27.193-18.42a3.5 3.5 0 0 1 4.278-5.541c11.032 8.517 19.766 14.44 26.14 17.747.481.25.968.5 1.46.749-.98-3.353-1.982-5.993-3.001-7.911-1.666-3.134-4.78-6.98-9.34-11.503a1.5 1.5 0 0 1 2.114-2.13c4.754 4.717 8.044 8.78 9.875 12.225 1.385 2.607 2.699 6.299 3.953 11.09 3.22 1.542 6.696 3.099 10.566 4.75 3.764 1.606 15.76 6.516 17.446 7.227 6.132 2.587 9.92 4.422 12.501 6.195 11.775 8.09 21.975 18.822 30.596 32.17a3.5 3.5 0 1 1-5.88 3.797c-3.93-6.085-8.194-11.578-12.79-16.483-5.801.837-10.35 1.086-13.681.737-3.94-.414-8.983-1.956-15.18-4.615a2 2 0 0 1 1.578-3.676c5.859 2.515 10.548 3.948 14.019 4.312 2.403.253 5.658.144 9.747-.331z" fill="#2ACEA0" fillRule="nonzero" />
              <path d="M34.983 88.503c2.11-1.649 1.503-5.877-.146-7.988-1.65-2.111-7.44-5.16-9.315-3.695-1.875 1.465.021 7.556 1.67 9.667 1.65 2.111 5.68 3.666 7.79 2.016zM71.26 140.234c1.575-2.167-.174-6.064-2.341-7.639-2.168-1.574-8.574-2.908-9.973-.984-1.398 1.925 2.103 7.258 4.27 8.833 2.168 1.574 6.47 1.957 8.045-.21zM14.742 89.046c-.091.334-.24.648-.435.94-.44.76-1.045 1.354-1.819 1.636a2.929 2.929 0 0 1-.285.087c-1.45.71-3.231.99-4.616.72-2.63-.51-8.056-3.864-7.602-6.2.274-1.41 2.705-2.515 5.168-3.056.019-2.506.58-5.088 1.948-5.586 2.235-.814 6.8 3.875 7.717 6.392.526 1.446.51 3.45-.076 5.067z" fill="#2DDF95" />
              <path d="M152.518 80.215c6.13-4.964 9.258-11.263 4.294-17.394-3.31-4.087-13.39-8.969-30.24-14.646 2.05 17.662 4.73 28.537 8.039 32.624 4.964 6.13 11.776 4.38 17.907-.584zM84.981 239.574c3.07-3.178 4.378-6.893 1.2-9.963-2.119-2.046-8.055-4.072-17.81-6.077 2.345 9.678 4.577 15.54 6.696 17.587 3.178 3.069 6.845 1.631 9.914-1.547z" fill="#26C281" />
              <path d="M350.277 51.711c4.82 2.672 9.718 3.05 12.39-1.77 1.781-3.213 2.305-11.02 1.573-23.419-10.904 5.95-17.246 10.53-19.027 13.744-2.672 4.82.244 8.774 5.064 11.445z" fill="#03A678" />
              <path d="M472 181.487c3.59 0 6.5 1.582 6.5-2.007a6.5 6.5 0 1 0-13 0c0 3.59 2.91 2.007 6.5 2.007zM73.123 24.65c-1.287-3.351-.852-6.635-4.203-5.349a6.5 6.5 0 1 0 4.658 12.137c3.352-1.287.831-3.437-.455-6.788zM429.988 243.367c6.657-2.69 9.873-10.266 7.183-16.923-2.69-6.657-10.266-9.873-16.923-7.183-6.657 2.69-2.351 7.227.338 13.884 2.69 6.657 2.745 12.912 9.402 10.222z" fill="#5B4A2F" />
            </g>
            <g className="success-glove">
              <path d="M213.085 146.24c14.089-3.482 21.075-10.868 23.227-19.497 3.443-13.811 4.218-57.462 13.926-67.966 9.709-10.504 20.372-12.663 25.912-7.354 5.54 5.309 4.565 11.128 3.165 31.615-1.4 20.486-3.225 52.385.907 66.678 4.132 14.294 3.376 56.378 14.614 67.55 7.492 7.448 38.486 17.966 92.98 31.553 1.58 39.47-6.718 67.462-24.89 83.974-27.259 24.769-24.504 18.7-32.71 16.654-8.206-2.046-58.186-42.875-74.49-43.382-16.306-.506-47.867-2.66-71.153-14.439-23.285-11.778-59.33-27.899-61.38-40.77-1.365-8.582 1.014-13.908 7.136-15.978-6.47-4.322-8.872-9.825-7.206-16.509 1.666-6.683 5.448-10.929 11.346-12.737-4.463-3.944-5.752-9.698-3.866-17.262 1.886-7.564 5.687-11.888 11.404-12.972-3.385-11.989-2.388-20.27 2.99-24.843 8.067-6.86 18.313-10.108 33.956-6.208 15.642 3.9 33.187 2.127 34.132 1.893z" fill="#299C7B" />
              <path d="M180.617 153.848c7.17 1.253 35.414 13.547 37.62 25.046 2.205 11.498-3.492 20.364-15.313 17.416-11.822-2.947-28.022-8.667-28.31-7.058-.287 1.61 47.144 7.4 43.066 23.755-.525 2.106-3.035 7.481-4.776 8.23-11.24 4.832-44.808-5.84-45.349-3.672-.62 2.49 40.441 2.4 36.094 19.837-4.348 17.437-41.66 2.49-42.295 5.035-.634 2.545 28.632 5.765 25.953 16.51-1.786 7.163-12.437 9.68-31.952 7.55 32.52 19.076 57.935 25.412 76.242 19.01 27.462-9.605 45.524-52.766 34.507-79.168-11.016-26.4-19.433-68.927-15.417-85.035 4.017-16.109 7.607-45.527-.55-49.398-1.03-.488-5.229-.67-6.033 1.358-5.046 12.71-3.958 55.704-15.26 63.085-13.104 8.559-33.039 10.748-39.054 9.249-6.015-1.5-24.868-5.555-30.026-2.115-5.157 3.44 13.682 9.111 20.853 10.365z" fill="#FADF7E" />
              <path d="M387.776 248.808c-.038 13.442-.303 23.105-.795 28.99-.633 7.547-2.219 14.449-3.853 20.447-1.906 7.002-4.88 13.13-7.108 17.555-4.305 8.553-11.014 15.313-16.636 20.579-3.846 3.602-9.22 8.923-16.822 12.95-2.193 1.162-4.978 2.076-8.358 2.741" stroke="#FADF7E" strokeWidth="5" strokeLinecap="round" />
            </g>
            <g className="success-tick" transform="translate(220.5 421)" stroke="#26C281" strokeWidth="3">
              <circle fill="#FFF" cx="18" cy="18" r="18" />
              <path d="M11.751 19.61l4.344 3.965 9.837-11.15" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DonationSuccess;