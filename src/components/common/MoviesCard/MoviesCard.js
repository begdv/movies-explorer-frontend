import clsx from 'clsx'

import {NOMOREPARTIES_URL} from "../../../utils/const";
import {calcDuration} from "../../../utils/utils";

import './MoviesCard.css';

function MoviesCard(props) {
  const {
    moviesCard,
    onCardLike: handleCardLike,
    onCardDelete: handleCardDelete,
    savedCards = false
  } = props;
  const buttonCardClassName = (savedCards) ?
    'MoviesCard__button-like_delete' :
    ((moviesCard.liked) ? 'MoviesCard__button-like_liked' : '');
  const handleCardClick = (moviesCard) => {
    (savedCards) ?  handleCardDelete(moviesCard) : handleCardLike(moviesCard);
  }
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
        <p className="MoviesCard__name">{moviesCard.nameRU}</p>
        <button
          type="button"
          className={clsx('MoviesCard__button-like', buttonCardClassName)}
          title="Нажмите кнопку чтобы сохранить фильм"
          onClick={() => handleCardClick(moviesCard)}
        >
        </button>
      </div>
      <span className="MoviesCard__duration">{calcDuration(moviesCard.duration)}</span>
    </li>
  );
}

export default MoviesCard;