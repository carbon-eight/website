import React from 'react';
import {
  Wrapper,
} from '../common';
import { generateKey } from '../../util/helpers';
import './CategoryButtons.scss';

const CategoryButton = ({ isActive, categoryText, setActiveCategoryHandler }) => (
  <button
    type="button"
    className={`category-button cta-button ${isActive ? 'active' : ''}`}
    onClick={event => setActiveCategoryHandler(event, categoryText)}
    aria-label={`Filter by ${categoryText} questions`}
  >
    <span>{categoryText}</span>
  </button>
);

const CategoryButtons = (props) => {
  const {
    activeCategory,
    categories,
    setActiveCategoryHandler,
  } = props;
  return (
    <section className="category-buttons">
      <div className="container">
        <Wrapper>
          {categories && categories.map((category, index) => (
            <CategoryButton
              key={generateKey(index)}
              isActive={activeCategory === category}
              categoryText={category}
              setActiveCategoryHandler={setActiveCategoryHandler}
            />
          ))}
        </Wrapper>
      </div>
    </section>
  );
};

export default CategoryButtons;
