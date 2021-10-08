import React from "react";
import { View } from "react-native";

interface SeparatorProps {
  color?: string;
}

export const Separator: React.FunctionComponent<SeparatorProps> = ({
  color = "#CED0CE",
}) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: color,
        marginTop: 24,
        marginBottom: 24,
      }}
    />
  );
};
