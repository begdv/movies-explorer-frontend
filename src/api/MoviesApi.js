import {NOMOREPARTIES_API} from '../utils/const.js';

class MoviesApi {
  getMovies() {
    return fetch(`${NOMOREPARTIES_API}`, {
      headers: {"content-type": "application/json"},
    })
      .then((res) => {
        return this._processResult(res);
      });
  }
  _processResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const moviesApi = new MoviesApi();