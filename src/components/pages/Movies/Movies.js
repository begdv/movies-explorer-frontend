import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";

import MEPreloader from "../../../components/controls/MEPreloader/MEPreloader";

import './Movies.css';

function Movies(props) {
  const {
    movies,
    isLoaded,
    showCards,
    onCardLike: handleCardLike,
    onCardsMore: handleClickCardsMore,
  } = props;
  return (
    <main className="Movies App__main">
      <SearchForm />
      <section className="Movies__content">
        <MEPreloader isShow={!isLoaded}/>
        {
          isLoaded && movies && <MoviesCardList
            movies={movies}
            showCards={showCards}
            onCardLike={handleCardLike}
            onCardsMore={handleClickCardsMore}
            savedCards={false}
          />
        }
      </section>
   </main>
  );
}

export default Movies;