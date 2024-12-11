import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Counter() {
  let counter = 0;

  const [count, setCount] = useState(0);

  const increment = () => {
    counter++;
    console.log(counter);
  };

  console.log("render");

  const increment2 = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          textAlign: "center",
          margin: 10,
          color: "red",
        }}
      >
        {counter}
      </Text>
      <Button onPress={increment} title="increment"></Button>
      <Text
        style={{
          fontSize: 50,
          textAlign: "center",
          margin: 10,
          color: "red",
        }}
      >
        {count}
      </Text>
      <Button onPress={increment2} title="increment"></Button>
    </View>
  );
}
