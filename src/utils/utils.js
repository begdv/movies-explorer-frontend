import {
  SIZE_TABLET,
  SIZE_DESKTOP,
  INITIAL_CARD_MOBILE,
  INITIAL_CARD_TABLET,
  INITIAL_CARD_DESKTOP,
  RESIZE_CARD_MOBILE,
  RESIZE_CARD_TABLET,
  RESIZE_CARD_DESKTOP,
  SHORT_FILM_DURATION
} from './const';

export const calcDuration = (duration) => {
  const hour = Math.floor(duration / 60);
  const min = duration % 60;
  return ((hour) ? `${hour}ч ` : '') + ((min) ? `${min}м` : '');
}

export const getInitialShowCardsCount = (width) => {
  const showCards = (width < SIZE_TABLET) ?
      INITIAL_CARD_MOBILE
    :
      ((width < SIZE_DESKTOP) ? INITIAL_CARD_TABLET : INITIAL_CARD_DESKTOP);
  return showCards;
}

export const setResizeShowCardsCount = (showCards, width) => {
  showCards = (width < SIZE_TABLET) ?
      Math.floor(showCards / RESIZE_CARD_MOBILE) * RESIZE_CARD_MOBILE - 1
    :
      (
        (width < SIZE_DESKTOP)
          ?
            Math.floor(showCards / RESIZE_CARD_TABLET) * RESIZE_CARD_TABLET
          :
            Math.floor(showCards / RESIZE_CARD_DESKTOP) * RESIZE_CARD_DESKTOP
      );
  showCards  = (showCards >= getInitialShowCardsCount(width)) ?
      showCards
    :
      getInitialShowCardsCount(width);
  return showCards;
}

export const setAppendShowCardsCount = (width) => {
  return (width < SIZE_DESKTOP) ? RESIZE_CARD_TABLET : RESIZE_CARD_DESKTOP;
}

export const getMovieFilter = (movie, filterMovie) => {
  const regexp = new RegExp(filterMovie.movie, 'i');
  let result = ((movie.nameRU && movie.nameRU.search(regexp)) ||
    (movie.nameEN && movie.nameEN.search(regexp))) !== -1;
  if(filterMovie.shortFilm){
    result = result && (movie.duration <= SHORT_FILM_DURATION)
  }
  return result;
}
