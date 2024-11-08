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

const ForgottenPasswordPage = () => {
  const [email, setEmail] = useState(""),
    [canVerifyEmail, setCanVerifyEmail] = useState(false);

  useEffect(() => {
    const verify = () => {
      if (email === "" || email === " " || email.length <= 5) {
        setCanVerifyEmail(false);
      } else {
        if (email.includes("@") && email.includes(".com")) {
          setCanVerifyEmail(true);
        } else {
          setCanVerifyEmail(false);
        }
      }
    };

    verify();
  }, [email]);

  const onInputChange = useCallback(
    (text, where) => {
      switch (where) {
        case "email":
          setEmail(text);
          break;
        default:
          break;
      }
    },
    [email]
  );

  const navigation = useNavigation();

  const verifyAccountPressed = () =>
    navigation.navigate("forgottenPasswordVerificationAccountPage");

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
        <View style={styles.verifyEmailButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              canVerifyEmail ? verifyAccountPressed() : undefined
            }
            style={[
              styles.verifyEmailButton,
              {
                backgroundColor: canVerifyEmail ? "green" : "#e5f3",
              },
            ]}
          >
            <Text style={styles.verifyEmailText}>Verify Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noteWrapper}>
          <Text style={styles.noteTitle}>Note :</Text>
          <Text style={styles.note}>
            We will send a verification 6-digit code to the email you provided
            above in order to verify the email and account attached to it
            belongs to you which will lead to creating new password!!!
          </Text>
        </View>
      </View>
    </SignInFormLayout>
  );
};

export default ForgottenPasswordPage;

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
    marginBottom: 10,
  },
  noteWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    margin: 20,
    flexWrap: "wrap",
  },
  noteTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  note: {
    fontSize: 15,
  },
  verifyEmailButtonContainer: {
    width: "100%",
    padding: 15,
    marginTop: 30,
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
