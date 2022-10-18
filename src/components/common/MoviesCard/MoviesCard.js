import { useLocation } from 'react-router-dom';

import clsx from 'clsx'

import {calcDuration} from "../../../utils/utils";

import './MoviesCard.css';

function MoviesCard(props) {
  const route = useLocation().pathname.replace('/','');
  const {
    moviesCard,
    onMovieSave: handleMovieSave,
    onMovieDelete: handleMovieDelete,
  } = props;

  const buttonCardClassName = (route === 'saved-movies') ?
    'MoviesCard__button-like_delete' :
    ((moviesCard.saved) ? 'MoviesCard__button-like_liked' : '');

  const handleCardClick = (e) => {
    (route === 'saved-movies') ?  handleMovieDelete(moviesCard) : (
      (e.target.className === 'MoviesCard__button-like') ? handleMovieSave(moviesCard) : handleMovieDelete(moviesCard));
  };

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
          src={moviesCard.image}
          alt={(moviesCard.nameRU) ? moviesCard.nameRU : moviesCard.nameEN}
        />
      </a>
      <div className="MoviesCard__info">
        <p className="MoviesCard__name">{(moviesCard.nameRU) ? moviesCard.nameRU : moviesCard.nameEN}</p>
        <button
          type="button"
          className={clsx('MoviesCard__button-like', buttonCardClassName)}
          title="Нажмите кнопку чтобы сохранить фильм"
          onClick={handleCardClick}
        >
        </button>
      </div>
      <span className="MoviesCard__duration">{calcDuration(moviesCard.duration)}</span>
    </li>
  );
}

export default MoviesCard;
