import PropTypes from 'prop-types';
import { useState } from 'react';
import css from '../SearchBar/SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    setQuery(query => (query = e.target.value.toLowerCase()));
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          value={query}
          className={css.SearchFormInput}
          type="text"
          // autocomplete="off"
          // autofocus="off"
          placeholder="Search images and photos"
          onChange={handleSearch}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
