import { useCustomModal } from "@/components/CustomModal";
import { useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";

const DemoScreen = () => {
  const navigation = useNavigation();
  const { openModal } = useCustomModal();
  return (
    <View>
      <Text>demo screen</Text>

      <Button
        onPress={() => {
          openModal("demo", "contenu du modal");
        }}
        title="open modal"
      ></Button>

      <Link href="/(tabs)">demo</Link>
      <Button
        title="redirect"
        onPress={() => {
          router.navigate("/(tabs)");
          // navigation.navigate("/settings/update-password");
        }}
      ></Button>

      <Link href="/camera">camera</Link>
    </View>
  );
};

export default DemoScreen;
