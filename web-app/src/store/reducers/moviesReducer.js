import { FETCH_MOVIES_LOADING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "../actionTypes/movieType";

const initialState = {
  movies: [],
  error: null,
  loading: true,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_MOVIES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
