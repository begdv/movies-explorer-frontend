export const calcDuration = (duration) => {
  const hour = Math.floor(duration / 60);
  const min = duration % 60;
  return ((hour) ? `${hour}ч ` : '') + ((min) ? `${min}м` : '');
}