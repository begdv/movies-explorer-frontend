import React from 'react';

import MEButton from "../../controls/MEButton/MEButton";
import MEFilterSwitch from "../../controls/MEFilterSwitch/MEFilterSwitch";
import MEFormError from "../../controls/MEFormError/MEFormError";

import {ERROR_FILTER } from '../../../utils/const';

import './SearchForm.css';

function SearchForm(props) {
  const {
    filterMovie,
    required,
    onFilterMovie: handleFilterMovie,
  } = props;

  const [movieValue, setMovieValue] = React.useState(filterMovie.movie);
  const [filterError, setFilterError] = React.useState([false]);

  const handleChangeFilterMovie = (e) => {
    setMovieValue(e.target.value.trim());
  };

  const handleSubmitFilterMovie = (e) => {
    e.preventDefault();

    if((movieValue === '') && required){
      setFilterError(ERROR_FILTER);
      return;
    }

    setFilterError('');

    handleFilterMovie({...filterMovie, movie : movieValue});
  };

  const handleSwitchChange = (switchValue) => {
    if((movieValue === '') && required){
      setFilterError(ERROR_FILTER);
      return;
    }

    handleFilterMovie({...filterMovie, shortFilm : switchValue});
  };

  return (
    <form className="SearchForm" name="search-movie"  onSubmit={handleSubmitFilterMovie} noValidate>
      <div className="SearchForm__input">
        <input
          className="SearchForm__input-movie"
          placeholder="Фильм"
          type="text"
          name="movie"
          size="1"
          required={required}
          onChange={handleChangeFilterMovie}
          value={movieValue}
        />
        <MEButton
          className="MEButton_type_search"
          type="submit"
          title="Поиск"
        />
      </div>
      <div className="SearchForm__shortfilm">
      <MEFilterSwitch
        switchValue={filterMovie.shortFilm}
        onSwitchChange={handleSwitchChange}
      />
      <span className="SearchForm__shortfilm-title">Короткометражки</span>
      <MEFormError
        errorMessage={filterError}
        className="MEFormError_type_filter"
      />
      </div>
    </form>
  );
}

export default SearchForm;
