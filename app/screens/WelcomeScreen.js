import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>UNIVERSAL</Text>
        <Text style={styles.title2}>Knowledge</Text>
      </View>

      <Text style={styles.subHeaderText}>[ Learn More, Know More ]</Text>
      <ImageBackground
        style={styles.background}
        source={require("../assets/universe.png")}
      ></ImageBackground>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionText}>
          Ultimate and Supreme knowledge of the universe
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={(e) => {
            navigation.navigate("signIn");
          }}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => {
            navigation.navigate("signUp")
          }}
        >
          <Text style={styles.createAccountButtonText}>create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.guessModeButton}
          onPress={(e) => {
            // navigation.navigate("signIn")
          }}
        >
          <Text style={styles.guessModeButtonText}>
            Continue with Guess Mode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "75%",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    padding: 5,
    fontWeight: "700",
    fontSize: 20,
    color: "goldenrod",
  },
  descriptionText: {
    color: "#e9fe",
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 20
  },
  descriptionTextContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    top: 500,
    paddingLeft: 10,
    paddingRight: 10,
  },
  guessModeButton: {
    width: "auto",
    height: "auto",
    backgroundColor: "pink",
    borderRadius: 10,
    marginTop: 20,
  },
  guessModeButtonText: {
    padding: 5,
    fontWeight: "700",
    fontSize: 15,
    color: "#000",
    marginLeft: 10,
    marginRight: 10,
  },
  secondContainer: {
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    columnGap: 10,
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    bottom: 15
  },
  signInButton: {
    width: "auto",
    height: "auto",
    backgroundColor: "green",
    borderRadius: 10,
  },
  signInButtonText: {
    padding: 5,
    fontWeight: "700",
    fontSize: 30,
    color: "#000",
    marginLeft: 40,
    marginRight: 40,
  },
  subHeaderText: {
    color: "gray",
    paddingBottom: 20
  },
  title: {
    color: "gray",
    fontFamily: "serif",
    fontSize: 40,
    // fontStyle: "italic",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 5
  },
  title2: {
    fontSize: 25,
    color: "gray",
    fontFamily: "serif",
  },
});
