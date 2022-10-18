export const NOMOREPARTIES_URL = 'https://api.nomoreparties.co';
export const NOMOREPARTIES_API = 'https://api.nomoreparties.co/beatfilm-movies';
export const BACKEND_API = 'https://api.begunovdv.movies-explorer.nomoredomains.sbs';

export const RESIZE_TIMEOUT = 500;
export const SIZE_TABLET = 768;
export const SIZE_DESKTOP = 1280;
export const INITIAL_CARD_MOBILE = 5;
export const INITIAL_CARD_TABLET = 8;
export const INITIAL_CARD_DESKTOP = 12;
export const RESIZE_CARD_MOBILE = 2;
export const RESIZE_CARD_TABLET = 2;
export const RESIZE_CARD_DESKTOP = 2;
export const SHORT_FILM_DURATION = 40;

export const DEFAULT_FILTER_MOVIE = {movie: '', shortFilm: false};

export const PROFILE_SUCCESS = 'Профиль пользователя успешно обновлен';
export const PATTERN_USERNAME = '[a-zA-Zа-яА-ЯёЁ0-9_ ]{2,30}';
export const PATTERN_EMAIL = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$';
export const PATTERN_PASSWORD = '\\S{8,30}';
export const ERROR_VALIDATION_USERNAME = 'Имя может содержать латинские или русские буквы, пробел или дефис. Длина поля от 2 до 30 символов';
export const ERROR_VALIDATION_EMAIL = 'Некорректный адрес электронной почты';
export const ERROR_VALIDATION_PASSWORD = 'Пароль может содержать от 8 до 30 символов';

export const ERROR_FILTER = 'Нужно ввести ключевое слово';
export const MESSAGE_NOTFOUND = 'Ничего не найдено';
export const ERROR_LOADMOVIES = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const ERROR_REGISTER = 'При регистрации пользователя произошла ошибка';
export const ERROR_PROFILE = 'При обновлении профиля произошла ошибка';
export const ERROR_SERVER = 'На сервере произошла ошибка';
export const ERROR_CONFLICT = 'Пользователь с таким email уже существует';
export const ERROR_SIGNING = 'Вы ввели неправильный логин или пароль';
export const ERROR_PAGENOTFOUND = 'Страница по указанному маршруту не найдена';
