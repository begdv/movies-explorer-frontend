import { useLocation } from 'react-router-dom';

import clsx from 'clsx'

import MEButton from '../../controls/MEButton/MEButton';

import MoviesCard from "../MoviesCard/MoviesCard";

import './MoviesCardList.css';

function MoviesCardList(props) {
  const route = useLocation().pathname.replace('/','');
  const {
    movies,
    showCards,
    onCardLike: handleCardLike,
    onCardDelete: handleCardDelete,
    onCardsMore: handleClickCardsMore,
    savedCards = false,
  } = props;
  const cntSavedMovies = movies.reduce((cnt, current) =>
    (current &&  current.liked) ? cnt + 1 : cnt
  , 0);
  const cntMovies = (savedCards) ? cntSavedMovies : movies.length;
  return (
    <section className="MoviesCardList">
      {
        (cntMovies > 0) ?
          <ul className="MoviesCardList__films">
            {movies && movies.map((moviesCard, index) =>
              (index < showCards)
              && (!savedCards || (savedCards && moviesCard.liked))
              && <MoviesCard
                key={moviesCard.id}
                savedCards={savedCards}
                moviesCard={moviesCard}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            )}
          </ul>
        :
          <p className="MoviesCardList__notfound">Ничего не найдено</p>
      }
      { route === 'movies' &&
        <MEButton
          className={clsx('MEButton_type_films-more', (showCards >= cntMovies) ? 'MEButton_hidden' : '')}
          type="button"
          title="Еще"
          onClick={handleClickCardsMore}
        />
      }
    </section>

  );
}

export default MoviesCardList;