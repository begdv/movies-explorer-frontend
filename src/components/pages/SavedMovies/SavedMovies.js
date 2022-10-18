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
    isLoadedMovies,
    errorMessage,
    onMovieDelete: handleMovieDelete,
    onFilterSavedMovie: handleFilterSavedMovie,
  } = props;

  return (
    <main className="SavedMovies App__main">
      <SearchForm
        filterMovie={filterSavedMovie}
        onFilterMovie={handleFilterSavedMovie}
        required={false}
      />
      <MEFormError
        errorMessage={errorMessage}
        className="MEFormError_type_movie"
      />
      <section className="SavedMovies__content">
        {
          savedMovies && <MoviesCardList
            movies={savedMovies}
            isLoadedMovies={isLoadedMovies}
            onMovieDelete={handleMovieDelete}
          />
        }
      </section>
    </main>
  );
}

export default SavedMovies;
