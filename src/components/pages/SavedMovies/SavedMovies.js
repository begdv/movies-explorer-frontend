import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import MEFormError from "../../controls/MEFormError/MEFormError";

import MEPreloader from "../../../components/controls/MEPreloader/MEPreloader";
import './SavedMovies.css';

function SavedMovies(props) {
  const {
    filterSavedMovie,
    savedMovies,
    isLoading,
    showSavedCards,
    errorMessage,
    onCardDelete: handleCardDelete,
    onFilterSavedMovie: handleFilterSavedMovie,
  } = props;
  return (
    <main className="SavedMovies App__main">
      <SearchForm
        filterMovie={filterSavedMovie}
        onFilterSavedMovie={handleFilterSavedMovie}
      />
      <MEFormError
        errorMessage={errorMessage}
        className="MEFormError_type_movie"
      />
      <MEPreloader isShow={isLoading}/>
      <section className="SavedMovies__content">
        {
          savedMovies && <MoviesCardList
            movies={savedMovies}
            showCards={showSavedCards}
            onCardDelete={handleCardDelete}
            savedCards={true}
          />
        }
      </section>
    </main>
  );
}

export default SavedMovies;