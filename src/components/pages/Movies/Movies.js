import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import MEFormError from "../../controls/MEFormError/MEFormError";

import MEPreloader from "../../../components/controls/MEPreloader/MEPreloader";

import './Movies.css';

function Movies(props) {
  const {
    movies,
    filterMovie,
    isLoading,
    showCards,
    errorMessage,
    onMovieSave: handleMovieSave,
    onMovieDelete: handleMovieDelete,
    onCardsMore: handleClickCardsMore,
    onFilterMovie: handleFilterMovie,
  } = props;
  return (
    <main className="Movies">
      <SearchForm
        filterMovie={filterMovie}
        onFilterMovie={handleFilterMovie}
      />
      <section className="Movies__content">
        <MEFormError
          errorMessage={errorMessage}
          className="MEFormError_type_movie"
        />
        <MEPreloader isShow={isLoading}/>
        {
          movies && <MoviesCardList
            movies={movies}
            showCards={showCards}
            onMovieSave={handleMovieSave}
            onMovieDelete={handleMovieDelete}
            onCardsMore={handleClickCardsMore}
          />
        }
      </section>
   </main>
  );
}

export default Movies;