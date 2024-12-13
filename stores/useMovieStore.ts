import { Movie } from "@/schemas/movie-schema";
import { getMovies } from "@/service/movie.service";
import { useEffect } from "react";
import { create } from "zustand";

type MovieStore = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  setMovie: (movie: Movie) => void;
};

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
  setMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));

const useMovies = () => {
  const { movies, setMovies, ...rest } = useMovieStore();

  useEffect(() => {
    getMovies().then((response) => {
      setMovies(response);
    });
  }, []);

  return { movies, ...rest };
};

export default useMovies;
