export function isUserAuthenticated() {
  // attempt to grab the token from localstorage
  const token = localStorage.getItem("jwt_token");

  // if it exists
  if (token) {
    // this just all works to compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const createdDate = new Date(token.created);
    const created = Math.round(createdDate.getTime() / 1000);
    const ttl = 1209600;
    const expiry = created + ttl;

    // if the token has expired return false
    if (created > expiry) return false;

    return true;
  }

  return false;
}
