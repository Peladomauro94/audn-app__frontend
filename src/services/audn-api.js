const BASE_URL = 'http://localhost:3000';

const getTopSongs = () => {
  return fetch(`${BASE_URL}/songs/top`, {
    headers: {
      "auth-token": localStorage.getItem("auth-token"),
    },
  })
    .then((res) => res.json())
    .then((dataTop) => {
      return dataTop;
    });
};

const checkCredentials = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data
    });
};

export { getTopSongs, checkCredentials}
