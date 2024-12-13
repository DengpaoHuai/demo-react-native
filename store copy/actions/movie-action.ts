import { Movie } from "@/schemas/movie-schema";

export const SET_ALL_MOVIES = "SET_ALL_MOVIES";
export const SET_MOVIE = "SET_MOVIE";

export const setAllMovies = (movies: Movie[]) => ({
  type: SET_ALL_MOVIES,
  payload: movies,
});

export const setMovie = (movie: Movie) => ({
  type: SET_MOVIE,
  payload: movie,
});
