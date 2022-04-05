import axios from "axios";
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_LOADING, FETCH_MOVIES_ERROR } from "../actionTypes/movieType";

const baseUrl = "https://swapi.dev/api/films/";

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: baseUrl,
      });
      dispatch(fetchMoviesSuccess(data.results));
    } catch (error) {
      dispatch(setMoviesError(error.response.data));
    } finally {
      dispatch(setMoviesLoading(false));
    }
  };
};

export const fetchMoviesSuccess = (payload) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload,
  };
};
export const setMoviesError = (payload) => {
  return {
    type: FETCH_MOVIES_ERROR,
    payload,
  };
};
export const setMoviesLoading = (payload) => {
  return {
    type: FETCH_MOVIES_LOADING,
    payload,
  };
};
