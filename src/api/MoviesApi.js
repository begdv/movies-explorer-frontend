import {NOMOREPARTIES_URL} from '../utils/const.js';

class MoviesApi {
  getMovies() {
    return fetch(`${NOMOREPARTIES_URL}`, {
      headers: {"content-type": "application/json"},
    })
      .then((res) => {
        return this._processResult(res);
      });
  }
   _makeHeader(){
    const token = localStorage.getItem('token');
    return {"Authorization": `Bearer ${token}`, "content-type": "application/json"};
  }
  _processResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const moviesApi = new MoviesApi();