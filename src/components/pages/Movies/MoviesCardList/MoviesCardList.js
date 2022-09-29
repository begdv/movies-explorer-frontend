import clsx from 'clsx'

import MEButton from '../../../controls/MEButton/MEButton';

import MoviesCard from "../MoviesCard/MoviesCard";

import './MoviesCardList.css';

function MoviesCardList(props) {
  const {
    movies,
    showCards,
    onCardLike: handleCardLike,
    onCardsMore: handleClickCardsMore,
  } = props;
  return (
    <section className="MoviesCardList">
      <ul className="MoviesCardList__films">
        {movies && movies.map((moviesCard, index) =>
            (index < showCards) && <MoviesCard
              key={moviesCard._id}
              moviesCard={moviesCard}
              onCardLike={handleCardLike}
            />
        )}
      </ul>
      <MEButton
          className={clsx('MEButton_type_films-more', (showCards >= movies.length) ? 'MEButton_hidden' : '')}
          type="button"
          title="Еще"
          onClick={handleClickCardsMore}
        />
    </section>

  );
}

export default MoviesCardList;