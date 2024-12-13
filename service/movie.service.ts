import { Movie } from "@/schemas/movie-schema";
import { httpClient } from "./http-client";

export const createMovie = async (
  movie: Omit<Movie, "_id">
): Promise<Movie> => {
  const response = await httpClient.post("/movies", movie);
  return response.data;
};

export const getMovies = async (): Promise<Movie[]> => {
  const response = await httpClient.get("/movies");
  return response.data;
};

export const deleteMovie = async (id: string): Promise<void> => {
  await httpClient.delete(`/movies/${id}`);
};
