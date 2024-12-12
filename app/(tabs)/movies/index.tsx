import { Movie } from "@/schemas/movie-schema";
import { getMovies } from "@/service/movie.service";
import { Link, router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigation = useNavigation();
  const getData = () => {
    getMovies().then((movies) => {
      setMovies(movies);
    });
  };

  useEffect(() => {
    navigation.addListener("focus", getData);

    return () => {
      navigation.removeListener("focus", getData);
    };
  }, []);

  return (
    <View>
      <Text>List de films</Text>

      <Link href="/(tabs)/movies/create">
        <Text>Créer un film</Text>
      </Link>
      {movies.map((movie) => {
        return (
          <View key={movie._id}>
            <Text>{movie.title}</Text>
            <Text>{movie.director}</Text>
            <Text>{movie.genre}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MoviesList;
