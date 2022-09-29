import MEButton from "../../../controls/MEButton/MEButton";
import MEFilterSwitch from "../../../controls/MEFilterSwitch/MEFilterSwitch";

import './SearchForm.css';

function SearchForm(props) {
  return (
    <form className="SearchForm" name="SearchForm" noValidate>
      <div className="SearchForm__input">
        <input
          className="SearchForm__input-movie"
          placeholder="Фильм"
          type="text"
          name="movie"
          size="1"
        />
        <MEButton
          className="MEButton_type_search"
          type="submit"
          title="Поиск"
        />
      </div>
      <div className="SearchForm__shortfilm">
      <MEFilterSwitch />
      <span className="SearchForm__shortfilm-title">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;