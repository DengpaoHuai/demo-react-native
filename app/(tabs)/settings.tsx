import { Link } from "expo-router";
import { Text, View } from "react-native";

const DemoRoute = () => {
  return (
    <View>
      <Text>demo screen</Text>
      <Link href="/settings/update">return</Link>

      <Link href="/settings/update-password/demo">mettre à jour le mdp</Link>

      <Link href="/settings/update-password/toto">update password</Link>
    </View>
  );
};

export default DemoRoute;
