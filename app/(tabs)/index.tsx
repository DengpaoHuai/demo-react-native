import DemoComponent from "@/components/DemoComponent";
import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <DemoComponent title="demo title" demo="demo">
      <View>
        <Text
          style={{
            fontSize: 45,
            color: "red",
          }}
        >
          demo content
        </Text>
      </View>
    </DemoComponent>
  );
}
