import React from 'react';
import {
  Wrapper,
} from '../common';
import './SearchBar.scss';

export const SearchBar = (props) => {
  const {
    searchActive,
    searchQuery,
    setSearch,
    searchFocusHandler,
  } = props;
  return (
    <section className="faq-search-bar">
      <div className="container">
        <Wrapper>
          <div className={`search ${searchActive ? 'active' : ''}`}>
            <input
              type="search"
              className="search-input"
              placeholder="Search Pitches"
              value={searchQuery}
              onChange={event => setSearch(event)}
              onFocus={event => searchFocusHandler(event, true)}
              onBlur={event => searchFocusHandler(event, false)}
            />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default SearchBar;
