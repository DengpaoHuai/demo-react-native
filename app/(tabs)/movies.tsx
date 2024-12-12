import { Link } from "expo-router";
import { Text, View } from "react-native";

const MoviesList = () => {
  return (
    <View>
      <Text>List de films</Text>

      <Link href="/(tabs)/(movies)/create">
        <Text>Créer un film</Text>
      </Link>
    </View>
  );
};

export default MoviesList;
