import { Movie } from "@/schemas/movie-schema";
import { getMovies } from "@/service/movie.service";
import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (movies.length === 0) {
      setIsLoading(true);
      getMovies().then((response) => {
        setMovies(response);
        setIsLoading(false);
      });
    }
  }, []);

  return { movies, isLoading, ...rest };
};

export default useMovies;
