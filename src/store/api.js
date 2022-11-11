export const fetchAPI = (content) => {
  return fetch(
    `https://gateway.marvel.com:443/v1/public/${content}?limit=100&apikey=c7be1003b511a13bb173976b09e56439`
  );
};
