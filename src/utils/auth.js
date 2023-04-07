import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

const UserRoleKey = 'vue_user_role'

const UserExtention = 'vue_user_extention'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export function removeRole() {
  return Cookies.remove(UserRoleKey)
}



export function setRole(role) {
  return Cookies.set(UserRoleKey, role)
}

export function getRole() {
  return Cookies.get(UserRoleKey)
}



export function removeUserExtention() {
  return Cookies.remove(UserExtention)
}



export function setUserExtention(role) {
  return Cookies.set(UserExtention, role)
}

export function getUserExtention() {
  return "18003"
  return Cookies.get(UserExtention)
}