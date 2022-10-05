import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import Footer from "../../common/Footer/Footer";

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
    <div className="Movies App__main">
      <SearchForm />
      <main className="Movies__content">
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
      </main>
      <Footer/>
    </div>
  );
}

export default Movies;