import { useState } from 'react';
import PropTypes from 'prop-types';

import { FcSearch } from 'react-icons/fc';

import css from './SearchBar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(search);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm__button}>
          <FcSearch />
          <span className={css.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={css.SearchForm__input}
          name="search"
          type="text"
          value={search}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          required
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
