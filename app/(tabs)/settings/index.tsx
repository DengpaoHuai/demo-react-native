import { Link } from "expo-router";
import { Text, View } from "react-native";

const DemoRoute = () => {
  return (
    <View>
      <Text>demo screen</Text>
      <Link href="/(tabs)/settings/update-password">return</Link>
    </View>
  );
};

export default DemoRoute;
