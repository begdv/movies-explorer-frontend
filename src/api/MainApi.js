import {BACKEND_API, } from '../utils/const.js';

class MainApi {
  verifyToken() {
    return fetch(`${BACKEND_API}/users/me`, {
      method: 'GET',
      headers: this._makeHeader(),
    })
      .then((res) => {
          return this._processResult(res);
      });
  }
  register({email, password, name}) {
    return fetch(`${BACKEND_API}/signup`, {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        password: password,
        email: email,
        name: name
      })
    })
      .then((res) => {
          return this._processResult(res);
      });
  }

  login({email, password}) {
    return fetch(`${BACKEND_API}/signin`, {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
        password: password,
        email: email
      })
    })
      .then((res) => {
          return this._processResult(res);
      });
  }
  getProfile() {
    return fetch(`${BACKEND_API}/users/me`, {
      headers: this._makeHeader(),
    })
      .then((res) => {
        return this._processResult(res);
      });
  }
  saveProfile({email, name}) {
    return fetch(`${BACKEND_API}/me`, {
      method: 'PATCH',
      headers: this._makeHeader(),
      body: JSON.stringify({
        email: email,
        name: name,
      })
    })
      .then((res) => {
        return this._processResult(res);
      });
  }
  getSavedMovies() {
    return fetch(`${BACKEND_API}/movies`, {
      headers: this._makeHeader(),
    })
      .then((res) => {
        return this._processResult(res);
      });
  }
  saveMovie(movieData) {
    return fetch(`${BACKEND_API}/movies`, {
      method: 'POST',
      headers: this._makeHeader(),
      body: JSON.stringify(movieData)
    })
      .then((res) => {
        return this._processResult(res);
      });
  }
  removeMovie(moviesId) {
    return fetch(`${BACKEND_API}movies/${moviesId}`, {
      method: 'DELETE',
      headers: this._makeHeader(),
    })
      .then((res) => {
        return this._processResult(res);
      });
  }
  _makeHeader(){
    const token = localStorage.getItem('token');
    return {"Authorization": `Bearer ${token}`, "content-type": "application/json"};
  }
  async _processResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(await res.json());
  }
}

export const mainApi = new MainApi();