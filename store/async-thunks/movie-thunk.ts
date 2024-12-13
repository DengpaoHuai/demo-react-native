import { Movie } from "@/schemas/movie-schema";
import { httpClient } from "@/service/http-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk("get/movies", async () => {
  const response = await httpClient.get("/movies");
  return response.data;
});

export const updateMovie = createAsyncThunk(
  "update/movie",
  async ({ movie, id }: { movie: Omit<Movie, "_id">; id: string }) => {
    const response = await httpClient.put(`/movies/${id}`, movie);
    return {
      movie: response.data,
      _id: id,
    };
  }
);
