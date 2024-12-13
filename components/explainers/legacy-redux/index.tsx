import { Movie } from "@/schemas/movie-schema";
import { deleteMovie, getMovies } from "@/service/movie.service";
import { setAllMovies } from "@/store/actions/movie-action";
import { State } from "@/store/store";
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
import { useDispatch, useSelector } from "react-redux";

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
        <Button
          title="Supprimer"
          onPress={() => {
            deleteMovie(movie._id);
          }}
        ></Button>
      </View>
    </View>
  );
};

const MoviesList = () => {
  // const navigation = useNavigation();
  const movies = useSelector((state: State) => state.movies);
  const dispatch = useDispatch();

  const getData = () => {
    getMovies().then((movies) => {
      dispatch(setAllMovies(movies));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  /*useEffect(() => {
    navigation.addListener("focus", getData);

    return () => {
      navigation.removeListener("focus", getData);
    };
  }, []);*/

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
