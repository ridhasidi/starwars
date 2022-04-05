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
    } catch (error) {
      console.log(error);
    }
  };
};
