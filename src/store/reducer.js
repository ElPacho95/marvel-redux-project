import { fetchAPI } from "./api";

const initialState = {
  characters: [],
  comics: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/characters":
      return { ...state, characters: action.payload };
    case "load/comics":
      return { ...state, comics: action.payload };
    default:
      return state;
  }
};

export const loadCharacters = () => {
  return async (dispatch) => {
    const response = await fetchAPI("characters");
    const { data } = await response.json();

    dispatch({
      type: "load/characters",
      payload: data.results,
    });
  };
};
export const loadComics = () => {
  return async (dispatch) => {
    const response = await fetchAPI("comics");
    const { data } = await response.json();
    dispatch({
      type: "load/comics",
      payload: data.results,
    });
  };
};
