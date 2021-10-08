import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Separator } from "./components/Separator";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.headerStyle, styles.red]}>
        Bienvenue sur mon application
      </Text>
      <Separator color="pink" />
      <Image
        style={{ width: 200, height: 400 }}
        source={{
          uri: "https://images.unsplash.com/photo-1517918446320-daaf0e211c87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80",
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  red: {
    color: "red",
  },
});
