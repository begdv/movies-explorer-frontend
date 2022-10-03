export const calcDuration = (duration) => {
  const hour = Math.floor(duration / 60);
  const min = duration % 60;
  return ((hour) ? `${hour}ч ` : '') + ((min) ? `${min}м` : '');
}

export const getInitialShowCardsCount = (width) => {
  const showCards = (width < 768) ? 5 : ((width < 1280) ? 8 : 12);
  return showCards;
}

export const setResizeShowCardsCount = (showCards, width) => {
  showCards = (width < 768) ? Math.floor(showCards / 2) * 2 - 1 :
  (
    (width < 1280) ? Math.floor(showCards / 2) * 2 : Math.floor(showCards / 4) * 4
  );
  showCards  = (showCards >= getInitialShowCardsCount(width)) ?
      showCards
    :
      getInitialShowCardsCount(width);
  return showCards;
}

export const setAppendShowCardsCount = (width) => {
  return (width < 1280) ? 2 : 4;
}