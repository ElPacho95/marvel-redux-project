const initialState = {
  characters: [],
  comics: [],
};
export const getAPI = (state = initialState, action) => {
  switch (action.type) {
    case "upload/characters":
      return { ...state, characters: action.payload };
    case "upload/comics":
      return { ...state, comics: action.payload };
    default:
      return state;
  }
};

const fetchAPI = async (content) => {
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/${content}?limit=100&apikey=c7be1003b511a13bb173976b09e56439`
  );
  const resJSON = await response.json();
  return resJSON.data.results;
};

export const uploadCharacters = async () => {
  const data = await fetchAPI("characters");

  return {
    type: "upload/characters",
    payload: data,
  };
};
export const uploadComics = async () => {
  const data = await fetchAPI("comics");

  return {
    type: "upload/comics",
    payload: data,
  };
};
