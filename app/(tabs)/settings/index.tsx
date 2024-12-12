import { Link } from "expo-router";
import { Text, View } from "react-native";

const DemoRoute = () => {
  return (
    <View>
      <Text>demo screen</Text>
      <Link href="/(tabs)/settings/update-password">return</Link>

      <Link href="/(tabs)/settings/update">mettre à jour le mdp</Link>

      <Link href="/(tabs)/settings/update-password">update password</Link>
    </View>
  );
};

export default DemoRoute;
