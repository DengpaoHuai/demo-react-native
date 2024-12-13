import { Movie } from "@/schemas/movie-schema";
import { createSlice } from "@reduxjs/toolkit";
import { getMovies, updateMovie } from "../async-thunks/movie-thunk";

type InitialMovieState = {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialMovieState = {
  movies: [],
  isLoading: false,
  error: null,
};

//pending
//fulfilled
//rejected

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    /* setAllMovies: (state, action) => {
      state.movies = action.payload;
    },*/
    //mutation de propriété
    setMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.error = action.error.message!;
        state.isLoading = false;
      })
      .addCase(updateMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (movie) => movie._id === action.payload._id
        );
        state.movies[index] = action.payload.movie;
        state.isLoading = false;
      })
      .addCase(updateMovie.rejected, (state, action) => {
        state.error = action.error.message!;
        state.isLoading = false;
      });
  },
});

export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
