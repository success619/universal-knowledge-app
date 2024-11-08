import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const SignUpNextAndPrevButton = ({ nextTo, backTo, canGoNext, nextButton, prevButton }) => {
  const navigation = useNavigation();
  const [addNextButton, setAddNextButton] = useState(true);

  useEffect(() => {
    if (nextButton===false) setAddNextButton(false);
  }, [nextButton])
  
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() =>
          backTo ? navigation.navigate(backTo) : navigation.goBack()
        }
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={[
            styles.nextIcon,
            {
              color: "black",
            },
          ]}
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </Svg>
        <Text style={styles.button}>Prev</Text>
      </TouchableOpacity>
      {addNextButton  && <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => (canGoNext ? navigation.navigate(nextTo) : undefined)}
      >
        <Text
          style={[
            styles.button,
            {
              color: canGoNext ? undefined : "gray",
            },
          ]}
        >
          Next
        </Text>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={[
            styles.nextIcon,
            {
              color: canGoNext ? "black" : "gray",
            },
          ]}
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </Svg>
      </TouchableOpacity>}
    </View>
  );
};

export default SignUpNextAndPrevButton;

const styles = StyleSheet.create({
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    fontSize: 20,
    fontWeight: "600",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    alignItems: "center",
  },
  nextIcon: {
    height: 20,
    width: 20,
  },
});
