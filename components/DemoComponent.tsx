import React from "react";
import { Text, View } from "react-native";

type DemoComponentProps = {
  title: string;
  demo: string;
  children: React.ReactNode;
};

const DemoComponent: React.FC<DemoComponentProps> = ({
  title,
  demo,
  children,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 45,
          fontWeight: "bold",
          color: "blue",
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

export default DemoComponent;
