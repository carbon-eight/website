import React, { useState } from 'react';
import {
  Wrapper,
  HtmlContent,
} from '../common';
import { generateKey } from '../../util/helpers';
import './QuestionsList.scss';

const QuestionListItem = (props) => {
  const {
    question,
    answer,
    category,
  } = props;
  const categoryText = category.document[0].data.categoryName.text || null;
  const [questionExpanded, setQuestionExpanded] = useState(false);
  return (
    <div className={`faq-question ${questionExpanded ? 'expanded' : ''}`}>
      <div className="top-container">
        <h2 className="the-question">{question.text}</h2>
        { categoryText && (
          <span className="category">
            {categoryText}
          </span>
        )}
        <button
          type="button"
          className={`toggle-icon ${questionExpanded ? 'toggled' : ''}`}
          onClick={event => setQuestionExpanded(!questionExpanded)}
          aria-label={`See answer to "${question.text}"`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10">
            <g fill="none" fillRule="evenodd">
              <path fill="#26C281" fillRule="nonzero" d="M2.5.418L.379 2.539 7.439 9.6 14.5 2.54 12.379.417l-4.94 4.94z" />
            </g>
          </svg>
        </button>
      </div>
      <div className="bottom-container">
        <HtmlContent content={answer.html} />
      </div>
    </div>
  );
};

const QuestionsList = ({ questions }) => (
  <section className="faq-question-list">
    <Wrapper>
      { questions && questions.length > 0 ? (
        questions.map((faq, index) => (
          <QuestionListItem
            key={generateKey(index)}
            {...faq}
          />
        ))
      ) : (
        <span className="no-results-message">
          Sorry we couldn't find anything that meets that criteria
        </span>
      )}
    </Wrapper>
  </section>
);

export default QuestionsList;
