import {
  Image,
  // ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ChemistryOfEarth from "./ChemistryOfEarth";

const UniversalKnowledgeBlog = () => {
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={styles.bodyContainer}
    >
      <View style={styles.sloganHeaderContainer}>
        <Image
          style={styles.milkyWayGalaxyImage1}
          source={require("../../../assets/galaxies/milky-way-galaxy.webp")}
        />
        <Text style={styles.universalKnowlegeText}>UNIVERSAL KNOWLEDGE</Text>
        <Text style={styles.uniSlogan}>
          [ Home of wisdom & knowledge, Brilliant and Excellent Almigty formular
          ]
        </Text>
        <Image
          style={styles.visionImage}
          source={require("../../../assets/galaxies/Vision-CS.webp")}
        />
        <Text style={styles.openBlogGuideLine1}>
          You think forward towards what you want to know more about, whatever
          it is, Universal knowledge is here to help you !!!
        </Text>
        <Text style={styles.openBlogGuideLine}>
          You have been bordering to know more about the universe, Welcome to
          your solution Point, Everything is broken down accordingly &
          respectively, Here(Below) is the run Down
        </Text>
        <ChemistryOfEarth />
      </View>
    </ScrollView>
  );
};

export default UniversalKnowledgeBlog;

const styles = StyleSheet.create({
  milkyWayGalaxyImage1: {
    width: "100%",
    height: 200,
  },
  sloganHeaderContainer: {
    padding: 0,
    width: "100%",
    height: "auto",
  },
  visionImage: {
    width: "100%",
    height: 200,
  },
  universalKnowlegeText: {
    fontSize: 32,
    fontWeight: "900",
    marginHorizontal: "auto",
    marginVertical: 5,
  },
  uniSlogan: {
    fontWeight: "600",
    marginHorizontal: "auto",
    paddingBottom: 20,
  },
  openBlogGuideLine: {
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "600",
    marginHorizontal: 10,
  },
  openBlogGuideLine1: {
    fontSize: 20,
    fontWeight: "600",
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
