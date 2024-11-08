import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import SignUpFormLayout from "../../layout/auth/SignUpFormLayout";
import SignUpNextAndPrevButton from "../../layout/auth/SignUpNextAndPrevButton";
import { useNavigation } from "@react-navigation/native";

const EmailAndPasswordPage = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmedPassword, setConfirmedPassword] = useState(""),
    [invalidEmail, setInvalidEmail] = useState(false),
    [passwordUnmatch, setPasswordUnmatch] = useState(false),
    [canVerifyEmail, setCanVerifyEmail] = useState(false);

  useEffect(() => {
    const verify = () => {
      if (
        email === "" ||
        email === " " ||
        email.length <= 2 ||
        password === "" ||
        password === " " ||
        confirmedPassword === "" ||
        confirmedPassword === " "
      ) {
        if (password !== confirmedPassword) setCanVerifyEmail(false);
      } else {
        if (
          password === confirmedPassword &&
          email.includes("@") &&
          email.includes(".com")
        ) {
          setCanVerifyEmail(true);
        } else {
          setCanVerifyEmail(false);
        }
      }
    };

    verify();
  }, [email, password, confirmedPassword]);

  const onInputChange = useCallback(
    (text, where) => {
      switch (where) {
        case "email":
          setEmail(text);
          break;
        case "password":
          setPassword(text);
          break;
        case "confirmPassword":
          password === text
            ? setConfirmedPassword(text)
            : setPasswordUnmatch(true);
          break;
        default:
          break;
      }
    },
    [email, password, confirmedPassword, passwordUnmatch]
  );

  const navigation = useNavigation();

  return (
    <SignUpFormLayout>
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
          <TextInput
            secureTextEntry={true}
            style={styles.inputBox}
            placeholder="confirm password"
            onChangeText={(text) => onInputChange(text, "confirmPassword")}
          />
        </View>
        <View style={styles.verifyEmailButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              canVerifyEmail
                ? navigation.navigate("verifyEmailPage")
                : undefined
            }
            style={[
              styles.verifyEmailButton,
              {
                backgroundColor: canVerifyEmail ? "green" : "#e5f3",
              },
            ]}
          >
            <Text style={styles.verifyEmailText}>Verify Email</Text>
          </TouchableOpacity>
        </View>
        <SignUpNextAndPrevButton nextButton={false} canGoNext={false} />
      </View>
    </SignUpFormLayout>
  );
};

export default EmailAndPasswordPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 20,
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
  verifyEmailButtonContainer: {
    width: "100%",
    padding: 15,
    marginTop: 40,
    alignContent: "center",
    alignItems: "center",
  },
  verifyEmailButton: {
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 5,
    width: 190,
    alignItems: "center",
  },
  verifyEmailText: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 10,
  },
});
