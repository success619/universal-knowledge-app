import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SignUpFormLayout from "../../layout/auth/SignUpFormLayout";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { useCallback, useEffect, useState } from "react";

const NameFormPage = () => {
  const [firstName, setFirstName] = useState(""),
    [middleName, setMiddleName] = useState(""),
    [lastName, setLastName] = useState("");

  const [canGoNext, setCanGoNext] = useState(false);
  const navigation = useNavigation();

  const onNameInputChange = useCallback(
    (name, where) => {
      switch (where) {
        case "firstName":
          setFirstName(name);
          break;
        case "middleName":
          setMiddleName(name);
          break;
        case "lastName":
          setLastName(name);
          break;

        default:
          break;
      }
    },
    [firstName, lastName, middleName]
  );

  useEffect(() => {
    if (
      firstName === "" ||
      firstName === " " ||
      lastName === "" ||
      lastName === " "
    ) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
  }, [firstName, lastName]);

  const signInPressed = () => navigation.navigate("signIn");

  return (
    <SignUpFormLayout>
      <View style={styles.container}>
        <Text style={styles.nameTitle}>What's Your Name? </Text>
        <View style={styles.nameInputContainer}>
          <TextInput
            style={styles.nameInputBox}
            placeholder="First Name"
            onChangeText={(text) => onNameInputChange(text, "firstName")}
          />
          <TextInput
            style={styles.nameInputBox}
            placeholder="Middle Name (optional)"
            onChangeText={(text) => onNameInputChange(text, "middleName")}
          />
          <TextInput
            style={styles.nameInputBox}
            placeholder="Last Name"
            onChangeText={(text) => onNameInputChange(text, "lastName")}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.nextButtonWrapper}
            onPress={() =>
              canGoNext ? navigation.navigate("dateOfBirthPage") : undefined
            }
          >
            <Text
              style={[
                styles.nextButton,
                {
                  color: canGoNext ? undefined : "gray",
                },
              ]}
            >
              Next{" "}
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
          </TouchableOpacity>
        </View>

        <View style={styles.signInContainer}>
          <Text style={styles.alreadyHaveAccount}>Already have account? </Text>
          <TouchableOpacity
            style={styles.signInWrapper}
            onPress={signInPressed}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.googleContainer}
          onPressIn={() => navigation.navigate("verifyEmailPage")}
        >
          <Svg
            style={styles.googleIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <Path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <Path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <Path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <Path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </Svg>
          <Text style={styles.googleContainerText}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
    </SignUpFormLayout>
  );
};

export default NameFormPage;

const styles = StyleSheet.create({
  buttonsContainer: {
    height: 40,
    width: "100%",
    alignItems: "flex-end",
    marginTop: 20,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  signInContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    alignItems: "center",
  },
  alreadyHaveAccount: {
    fontSize: 16,
  },
  signInWrapper: {},
  signInText: {
    fontSize: 18,
    color: "purple",
    fontWeight: "600",
    gap: 1,
  },
  googleContainer: {
    margin: 20,
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    gap: 2,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fef1f2",
    borderRadius: 5,
  },
  googleContainerText: {
    fontSize: 15,
    fontWeight: "400",
  },
  googleIcon: {
    width: 25,
    height: 24,
  },
  nameInputBox: {
    borderTopRightRadius: 10,
    fontSize: 20,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  nameInputContainer: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  nameTitle: {
    fontWeight: "600",
    fontSize: 25,
  },
  nextButton: {
    fontSize: 20,
    fontWeight: "600",
  },
  nextButtonWrapper: {
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
