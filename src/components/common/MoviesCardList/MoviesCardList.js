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
    onMovieSave: handleMovieSave,
    onMovieDelete: handleMovieDelete,
    onCardsMore: handleClickCardsMore,
  } = props;
  
  return (
    <section className="MoviesCardList">
      {
        (movies.length > 0) ?
          <ul className="MoviesCardList__films">
            {movies && movies.map((moviesCard, index) =>
              (((route === 'movies') && (index < showCards)) ||
                ((route === 'saved-movies') && !moviesCard.filtered))
              && <MoviesCard
                key={moviesCard.id}
                moviesCard={moviesCard}
                onMovieSave={handleMovieSave}
                onMovieDelete={handleMovieDelete}
              />
            )}
          </ul>
        :
          <p className="MoviesCardList__notfound">Ничего не найдено</p>
      }
      { route === 'movies' &&
        <MEButton
          className={clsx('MEButton_type_films-more', (showCards >= movies.length) ? 'MEButton_hidden' : '')}
          type="button"
          title="Еще"
          onClick={handleClickCardsMore}
        />
      }
    </section>

  );
}

export default MoviesCardList;
