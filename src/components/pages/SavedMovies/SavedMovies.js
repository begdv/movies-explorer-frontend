import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";

import './SavedMovies.css';

function SavedMovies(props) {
  const {
    movies,
    showCards,
    onCardDelete: handleCardDelete,
    onCardsMore: handleClickCardsMore,
  } = props;
  return (
    <main className="SavedMovies App__main">
      <SearchForm />
      <section className="SavedMovies__content">
        {
          movies && <MoviesCardList
            movies={movies}
            showCards={showCards}
            onCardDelete={handleCardDelete}
            onCardsMore={handleClickCardsMore}
            savedCards={true}
          />
        }
      </section>
    </main>
  );
}

export default SavedMovies;