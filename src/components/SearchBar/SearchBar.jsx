import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../SearchBar/SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    query: '',
  };
  handleSearch = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={this.state.query}
            className={css.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus="off"
            placeholder="Search images and photos"
            onChange={this.handleSearch}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
