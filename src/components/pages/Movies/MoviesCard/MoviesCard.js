import clsx from 'clsx'

import {NOMOREPARTIES_URL} from "../../../../utils/const";
import {calcDuration} from "../../../../utils/utils";

import './MoviesCard.css';

function MoviesCard(props) {
  const {
    moviesCard,
    onCardLike: handleCardLike,
  } = props;
  return (
    <li className="MoviesCard">
      <a
        className="MoviesCard__trailer-link"
        href={moviesCard.trailerLink}
        title="Нажмите, чтобы посмотреть трейлер фильма"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="MoviesCard__image"
          src={`${NOMOREPARTIES_URL}${moviesCard.image.url}`}
          alt={moviesCard.nameRU}
        />
      </a>
      <div className="MoviesCard__info">
        <h2 className="MoviesCard__name">{moviesCard.nameRU}</h2>
        <button
          type="button"
          className={clsx('MoviesCard__button-like', (moviesCard.liked) ? 'MoviesCard__button-like_liked' : '')}
          title="Нажмите кнопку чтобы сохранить фильм"
          onClick={() => handleCardLike(moviesCard)}
        >
        </button>
      </div>
      <span className="MoviesCard__duration">{calcDuration(moviesCard.duration)}</span>
    </li>
  );
}

export default MoviesCard;