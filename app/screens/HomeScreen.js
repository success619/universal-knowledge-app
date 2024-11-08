import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import HeaderLayout from "../components/layout/home/HeaderLayout";
import UniversalKnowledgeBlog from "../components/layout/home/UniversalKnowledgeBlog";


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <HeaderLayout />
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={styles.bodyContainer}>
        <UniversalKnowledgeBlog />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bodyContainer: {
    marginBottom: 50
  }
});
