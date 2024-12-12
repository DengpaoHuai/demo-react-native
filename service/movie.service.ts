import { Movie } from "@/schemas/movie-schema";
import { httpClient } from "./http-client";

export const createMovie = async (movie: Movie): Promise<Movie> => {
  const response = await httpClient.post("/movies", movie);
  return response.data;
};

export const getMovies = async (): Promise<Movie[]> => {
  const response = await httpClient.get("/movies");
  return response.data;
};
