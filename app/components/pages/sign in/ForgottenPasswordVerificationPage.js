import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SignInFormLayout from "../../layout/auth/SignInFormLayout";
import { OtpInput } from "react-native-otp-entry";

const ForgottenPasswordVerificationPage = () => {
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(30);
  const [wrongOtp, setWrongOtp] = useState(false);

  const navigation = useNavigation();

  const onWrongCode = () => {
    setWrongOtp(true);
  };

  let resendOtpTimerInterval;

  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    startResendOtpTimer();

    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const resendButtonPressed = () => {
    setResendButtonDisabledTime(30);
    setWrongOtp(false);

    // do something
  };

  const editEmailPressed = () => {
    navigation.navigate("emailAndPasswordPage");
  };

  const onInputFilled = (code) => {
    code === "222222"
      ? onWrongCode()
      : navigation.navigate("createNewPasswordForgottenPage");
    console.log(`OTP is ${code}`);
  };

  return (
    <SignInFormLayout>
      <View style={styles.container}>
        <View>
          <Text style={styles.nameTitle}>Verify Your Account :</Text>
          <Text style={styles.description}>
            We've sent a 6-digit code to aguogansuccess@gmail.com
          </Text>
          <TouchableOpacity style={styles.editEmail} onPress={editEmailPressed}>
            <Text style={styles.editEmailText}>Edit Email</Text>
          </TouchableOpacity>
        </View>
        {wrongOtp && (
          <View style={styles.wrongInputCodeWrapper}>
            <Text style={styles.wrongInputCodeText}>
              Wrong Input, please Enter correct code
            </Text>
          </View>
        )}
        <View style={styles.inputContainer}>
          <OtpInput
            numberOfDigits={6}
            focusColor={wrongOtp ? "red" : "green"}
            focusStickBlinkingDuration={500}
            onTextChange={(text) => console.log(text)}
            onFilled={onInputFilled}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            // theme={{
            //   containerStyle: styles.pinCodeContainer,
            //   pinCodeContainerStyle: styles.pinCodeContainer,
            //   pinCodeTextStyle: styles.pinCodeText,
            //   focusStickStyle: styles.focusStick,
            //   focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            // }}
          />
        </View>
        <View style={styles.resendCodeContainer}>
          <Text style={styles.resendQuestion}>Didn't recieve code ?</Text>
          {resendButtonDisabledTime > 0 ? (
            <Text style={styles.resendTimeText}>
              {resendButtonDisabledTime}
              <Text style={styles.resendTimeSec}> sec</Text>
            </Text>
          ) : (
            <TouchableOpacity onPressIn={resendButtonPressed}>
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SignInFormLayout>
  );
};

export default ForgottenPasswordVerificationPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  description: {
    margin: 10,
    // fontSize: 17,
    textAlignVertical: "center",
  },
  editEmail: {
    alignSelf: "flex-end",
  },
  editEmailText: {
    color: "blue",
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  nameTitle: {
    fontWeight: "600",
    fontSize: 25,
    marginTop: 10,
  },
  resendCodeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    alignItems: "center",
  },
  resendText: {
    color: "green",
    fontSize: 18,
    fontWeight: "600",
  },
  resendQuestion: {
    fontSize: 17,
  },
  resendTimeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "goldenrod",
  },
  resendTimeSec: {
    fontWeight: "400",
    color: "orange",
  },
  wrongInputCodeText: {
    color: "red",
    fontSize: 15,
    fontWeight: "500",
    marginHorizontal: 10,
    textAlign: "center",
  },
  wrongInputCodeWrapper: {
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    marginVertical: 10,
  },
});
