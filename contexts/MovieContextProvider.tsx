import { Movie } from "@/schemas/movie-schema";
import { deleteMovie, getMovies } from "@/service/movie.service";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext({});

type MovieContextProviderProps = {
  children: React.ReactNode;
};

const MovieContextProvider: React.FC<MovieContextProviderProps> = ({
  children,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then((response) => {
      setMovies(response);
    });
  }, []);

  const deleteMovieById = async (id: string) => {
    await deleteMovie(id);
    setMovies(movies.filter((movie) => movie._id !== id));
  };

  return (
    <MovieContext.Provider value={{ movies, deleteMovieById }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
