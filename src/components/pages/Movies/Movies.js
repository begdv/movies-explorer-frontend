import Header from "../../common/Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../../common/Footer/Footer";

import MEPreloader from "../../../components/controls/MEPreloader/MEPreloader";

import './Movies.css';

function Movies(props) {
  const {
    movies,
    isLoaded,
    showCards,
    onMenuPopup: handleMenuPopup,
    onCardLike: handleCardLike,
    onCardsMore: handleClickCardsMore,
  } = props;
  return (
    <div className="Movies  App__movies">
      <Header
        isLoggedIn={true}
        onMenuPopup={handleMenuPopup}
      />
      <SearchForm />
      <main className="Movies__content">
        <MEPreloader isShow={!isLoaded}/>
        {
          isLoaded && movies && <MoviesCardList
            movies={movies}
            showCards={showCards}
            onCardLike={handleCardLike}
            onCardsMore={handleClickCardsMore}
          />
        }
      </main>
      <Footer/>
    </div>
  );
}

export default Movies;