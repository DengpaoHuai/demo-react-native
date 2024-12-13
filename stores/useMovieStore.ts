import { Movie } from "@/schemas/movie-schema";
import { getMovies } from "@/service/movie.service";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*
AsyncStorage.getItem('key')

AsyncStorage.setItem('key', JSON.stringify({
    name : 'John Doe'
}))
*/

type MovieStore = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  setMovie: (movie: Movie) => void;
};

export const useMovieStore = create()(
  persist(
    (set) => ({
      movies: [],
      setMovies: (movies) => set({ movies }),
      setMovie: (movie) =>
        set((state) => ({ movies: [...state.movies, movie] })),
    }),
    {
      name: "food-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

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
