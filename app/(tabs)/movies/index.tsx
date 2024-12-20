import { MovieContext } from "@/contexts/MovieContextProvider";
import { Movie } from "@/schemas/movie-schema";
import { getMovies } from "@/service/movie.service";
import useMovies from "@/stores/useMovieStore";
import { Link } from "expo-router";
import { useContext, useEffect } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

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
        <Button title="Supprimer"></Button>
      </View>
    </View>
  );
};

const MoviesList = () => {
  const { movies } = useMovies();

  return (
    <View>
      <Text>List de films</Text>

      <Link href="/(tabs)/movies/create">
        <Text>Créer un film</Text>
      </Link>
      <FlatList
        data={movies}
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
