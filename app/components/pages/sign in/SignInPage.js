import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import SignInFormLayout from "../../layout/auth/SignInFormLayout";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

const SignInPage = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [wrongInputs, setWrongInputs] = useState(false),
    [canSignIn, setCanSignIn] = useState(false);

  useEffect(() => {
    const verify = () => {
      if (
        email === "" ||
        email === " " ||
        email.length <= 2 ||
        password === "" ||
        password === " "
      ) {
        if (password.length <= 5) setCanSignIn(false);
      } else {
        if (
          password.length > 5 &&
          email.includes("@") &&
          email.includes(".com")
        ) {
          setCanSignIn(true);
        } else {
          setCanSignIn(false);
        }
      }
    };

    verify();
  }, [email, password]);

  const onInputChange = useCallback(
    (text, where) => {
      switch (where) {
        case "email":
          setEmail(text);
          break;
        case "password":
          setPassword(text);
          break;
        default:
          break;
      }
    },
    [email, password]
  );

  const navigation = useNavigation();

  const createAccountPressed = () => navigation.navigate("signUp"),
    forgottenPasswordPressed = () =>
      navigation.navigate("forgottenPasswordPage");

  return (
    <SignInFormLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.nameTitle}>Email :</Text>
          <TextInput
            inputMode="email"
            style={styles.inputBox}
            placeholder="example@universal.com"
            onChangeText={(text) => onInputChange(text, "email")}
          />
        </View>
        <View>
          <Text style={styles.nameTitle}>Password :</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputBox}
            placeholder="password"
            onChangeText={(text) => onInputChange(text, "password")}
          />
        </View>
        <TouchableOpacity
          style={styles.forgottenPasswordButton}
          onPress={forgottenPasswordPressed}
        >
          <Text style={styles.forgottenPasswordText}>Forgotten Password ?</Text>
        </TouchableOpacity>
        <View style={styles.signInButtonContainer}>
          <TouchableOpacity
            onPress={() => (canSignIn ? navigation.navigate("") : undefined)}
            style={[
              styles.signInButton,
              {
                backgroundColor: canSignIn ? "green" : "#e5f3",
              },
            ]}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createAccountContainer}>
          <Text style={styles.notAMember}>Not a member? </Text>
          <TouchableOpacity
            style={styles.createAccountWrapper}
            onPress={createAccountPressed}
          >
            <Text style={styles.createAccountText}>create account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.googleContainer}
          onPress={() => navigation.navigate("")}
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
          <Text style={styles.googleContainerText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </SignInFormLayout>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  createAccountContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    alignItems: "center",
  },
  notAMember: {
    fontSize: 16,
  },
  createAccountWrapper: {},
  createAccountText: {
    fontSize: 18,
    color: "purple",
    fontWeight: "600",
    gap: 1,
  },
  forgottenPasswordButton: {
    margin: 5,
  },
  forgottenPasswordText: {
    fontSize: 18,
    color: "blue",
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
  inputBox: {
    borderTopRightRadius: 10,
    fontSize: 20,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  nameTitle: {
    fontWeight: "600",
    fontSize: 25,
    marginTop: 10,
  },
  signInButtonContainer: {
    width: "100%",
    padding: 15,
    marginTop: 10,
    alignContent: "center",
    alignItems: "center",
  },
  signInButton: {
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 5,
    width: 190,
    alignItems: "center",
  },
  signInText: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 10,
  },
});
