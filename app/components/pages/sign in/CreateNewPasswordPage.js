import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SignInFormLayout from "../../layout/auth/SignInFormLayout";

const CreateNewPasswordPage = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState(""),
    [confirmedPassword, setConfirmedPassword] = useState(""),
    [passwordUnmatch, setPasswordUnmatch] = useState(false),
    [canSetPassword, setCanSetPassword] = useState(false);

  useEffect(() => {
    const verify = () => {
      if (
        password === "" ||
        password === " " ||
        confirmedPassword === "" ||
        confirmedPassword === " "
      ) {
        if (password !== confirmedPassword) {
          setCanSetPassword(false);
          setPasswordUnmatch(true);
        }
      } else {
        if (password === confirmedPassword && password.length > 5) {
          setCanSetPassword(true);
          setPasswordUnmatch(false);
        } else {
          setCanSetPassword(false);
          setPasswordUnmatch(true);
        }
      }
    };

    verify();
    if (password === confirmedPassword) {
      setPasswordUnmatch(false);
    } else {
      setPasswordUnmatch(true);
    }
  }, [password, confirmedPassword]);

  const onInputChange = useCallback(
    (text, where) => {
      switch (where) {
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
    [password, confirmedPassword, passwordUnmatch]
  );

  return (
    <SignInFormLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.nameTitle}>Create New Password :</Text>
          {passwordUnmatch && (
            <Text style={styles.unmatchedPassword}>password not matched</Text>
          )}
          <TextInput
            secureTextEntry={true}
            style={[
              styles.inputBox,
              {
                borderColor: passwordUnmatch ? "red" : undefined,
              },
            ]}
            placeholder="password"
            onChangeText={(text) => onInputChange(text, "password")}
          />
          <TextInput
            secureTextEntry={true}
            style={[
              styles.inputBox,
              {
                borderColor: passwordUnmatch ? "red" : undefined,
              },
            ]}
            placeholder="confirm password"
            onChangeText={(text) => onInputChange(text, "confirmPassword")}
          />
        </View>
        <View style={styles.setPasswordButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              canSetPassword
                ? navigation.navigate("verifyEmailPage")
                : undefined
            }
            style={[
              styles.setPasswordButton,
              {
                backgroundColor: canSetPassword ? "green" : "#e5f3",
              },
            ]}
          >
            <Text style={styles.setPasswordText}>Set Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SignInFormLayout>
  );
};

export default CreateNewPasswordPage;

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
    marginBottom: 15,
  },
  setPasswordButtonContainer: {
    width: "100%",
    padding: 15,
    marginTop: 40,
    alignContent: "center",
    alignItems: "center",
  },
  setPasswordButton: {
    borderWidth: 1,
    borderColor: "purple",
    borderRadius: 5,
    width: 190,
    alignItems: "center",
  },
  setPasswordText: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 10,
  },
  unmatchedPassword: {
    marginHorizontal: 20,
    color: "red",
  },
});
