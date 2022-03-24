const TokenKey = 'Admin-Token'

const session = window.sessionStorage

export function getToken() {
  return session.getItem(TokenKey)
}

export function setToken(token) {
  return session.setItem(TokenKey, token)
}

export function removeToken() {
  return session.removeItem(TokenKey)
}
