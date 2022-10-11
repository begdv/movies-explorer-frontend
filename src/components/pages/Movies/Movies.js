import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";

import MEPreloader from "../../../components/controls/MEPreloader/MEPreloader";

import './Movies.css';

function Movies(props) {
  const {
    movies,
    isLoading,
    showCards,
    onCardLike: handleCardLike,
    onCardsMore: handleClickCardsMore,
  } = props;
  return (
    <main className="Movies App__main">
      <SearchForm />
      <section className="Movies__content">
        <MEPreloader isShow={isLoading}/>
        {
          movies && <MoviesCardList
            movies={movies}
            showCards={showCards}
            onCardLike={handleCardLike}
            onCardsMore={handleClickCardsMore}
          />
        }
      </section>
   </main>
  );
}

export default Movies;