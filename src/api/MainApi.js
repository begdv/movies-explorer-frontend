import {BACKEND_URL, } from '../utils/const.js';

class MainApi {
  register({email, password, name}) {
    return fetch(`${BACKEND_URL}/signup`, {
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
    return fetch(`${BACKEND_URL}/signin`, {
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
  verifyToken(token) {
    return fetch(`${BACKEND_URL}/users/me`, {
      method: 'GET',
      headers: this._makeHeader(),
    })
      .then((res) => {
          return this._processResult(res);
      });
  }
  getProfile() {
    return fetch(`${BACKEND_URL}/users/me`, {
      headers: this._makeHeader(),
    })
      .then((res) => {
        return this._processResult(res);
      });
  }
  saveProfile({email, name}) {
    return fetch(`${BACKEND_URL}/me`, {
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

export const mainApi = new MainApi();