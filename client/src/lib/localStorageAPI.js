const TOKEN_NAME = "jwt_token";

export function getJSONToken() {
  return localStorage.getItem(TOKEN_NAME);
}

export function deleteJSONToken() {
  localStorage.removeItem(TOKEN_NAME);
}
