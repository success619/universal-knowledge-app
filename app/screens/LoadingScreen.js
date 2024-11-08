import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={require("../assets/universalLogo.png")}/>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white"
  }
});
