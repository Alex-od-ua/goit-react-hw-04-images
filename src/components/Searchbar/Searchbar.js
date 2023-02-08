import { useState } from 'react';
import PropTypes from 'prop-types';

import { FcSearch } from 'react-icons/fc';

import { initialState } from './initialState';
import css from './SearchBar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...state });
    setState({ ...initialState });
    // const { onSubmit } = this.props;

    // onSubmit({ ...this.state });
    // this.reset();
  };

  // reset() {
  //   this.setState({
  //     search: '',
  //   });
  // }

  const { search } = state;
  // const { handleChange, handleSubmit } = this;

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
