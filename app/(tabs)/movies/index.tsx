import { Movie } from "@/schemas/movie-schema";
import { getMovies } from "@/service/movie.service";
import { Link, router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  FlatList,
} from "react-native";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <View style={styles.cardContainer}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {movie.title}
      </Text>
      <Text>{movie.director}</Text>
      <Text>{movie.genre}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Modifier" onPress={() => {}}></Button>
        <Button title="Supprimer" onPress={() => {}}></Button>
      </View>
    </View>
  );
};

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
      <FlatList
        data={movies}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.log("end reached");
          setMovies([
            ...movies,
            ...movies.map((movie) => ({ ...movie, _id: `${movie._id}-1` })),
          ]);
        }}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item }) => <MovieCard movie={item}></MovieCard>}
        keyExtractor={(item) => item._id}
      ></FlatList>
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    margin: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
});
