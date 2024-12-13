import { Movie } from "@/schemas/movie-schema";
import { SET_ALL_MOVIES, SET_MOVIE } from "../actions/movie-action";

type InitialState = {
  movies: Movie[];
};

const initialState: InitialState = {
  movies: [],
};

//TODO : vous montrer que même redux le type en any
type Action = {
  type: string;
  payload: any;
};

const movieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};

export default movieReducer;
