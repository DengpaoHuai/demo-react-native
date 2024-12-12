import { useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

const DemoScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>demo screen</Text>
      <Link href="/(tabs)">demo</Link>
      <Button
        title="redirect"
        onPress={() => {
          //router.navigate("/settings/update-password");
          navigation.navigate("/settings/update-password");
        }}
      ></Button>
    </View>
  );
};

export default DemoScreen;
