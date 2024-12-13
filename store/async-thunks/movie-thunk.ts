import { httpClient } from "@/service/http-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk("get/movies", async () => {
  const response = await httpClient.get("/movies");
  return response.data;
});
