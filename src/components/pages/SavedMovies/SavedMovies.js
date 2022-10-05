import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import Footer from "../../common/Footer/Footer";

import './SavedMovies.css';

function SavedMovies(props) {
  const {
    movies,
    isLoaded,
    showCards,
    onCardDelete: handleCardDelete,
    onCardsMore: handleClickCardsMore,
  } = props;
  return (
    <div className="SavedMovies App__main">
      <SearchForm />
      <main className="SavedMovies__content">
        {
          isLoaded && movies && <MoviesCardList
            movies={movies}
            showCards={showCards}
            onCardDelete={handleCardDelete}
            onCardsMore={handleClickCardsMore}
          />
        }
      </main>
      <Footer/>
    </div>
  );
}

export default SavedMovies;