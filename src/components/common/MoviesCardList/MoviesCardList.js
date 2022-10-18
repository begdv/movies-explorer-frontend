import { useLocation } from 'react-router-dom';

import clsx from 'clsx'

import MEButton from '../../controls/MEButton/MEButton';
import MoviesCard from "../MoviesCard/MoviesCard";
import { MESSAGE_NOTFOUND } from "../../../utils/const";

import './MoviesCardList.css';

function MoviesCardList(props) {
  const route = useLocation().pathname.replace('/','');
  const {
    movies,
    isLoadMovies,
    showCards,
    isLoading,
    onMovieSave: handleMovieSave,
    onMovieDelete: handleMovieDelete,
    onCardsMore: handleClickCardsMore,
  } = props;

  const countMovies = (route === 'movies') ? movies.length :
      movies.reduce((result, movie) => {
        return (!movie.filtered) ? result + 1 : result;
      }, 0);

  return (
    <section className="MoviesCardList">
      {
        (countMovies > 0) ?
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
        (!(isLoading) && (isLoadMovies || (route === 'saved-movies'))) ?
            <p className="MoviesCardList__notfound">{MESSAGE_NOTFOUND}</p>
          : null
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
