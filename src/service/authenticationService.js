const KEY = 'authentication-data';

function getTimestampInSeconds () {
  return Math.floor(Date.now() / 1000)
}

function decryptTokenPayload() {
  const token = getToken();

  /** JWT decrypt payload: https://css-tricks.com/react-authentication-access-control/#aa-jwt-access-tokens */
  const payload = token.split('.')[1];
  const data = JSON.parse(window.atob(payload));
  /** JWT decrypt payload */

  return data;
}

export function getToken() {
  return localStorage.getItem(KEY);
}

export function saveToken(token) {
  localStorage.setItem(KEY, token);
}

export function removeToken() {
  localStorage.removeItem(KEY);
}

export function hasToken() {
  return localStorage.getItem(KEY) !== null;
}

export function tokenIsValid() {
  const data = decryptTokenPayload();

  return data.exp > getTimestampInSeconds();
}

export function getUserData() {
  const data = decryptTokenPayload();
  return data.user;
}


const authenticationService = { getToken, saveToken, removeToken, hasToken, tokenIsValid, getUserData }
export default authenticationService;
