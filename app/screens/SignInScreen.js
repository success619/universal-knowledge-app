import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInPage from "../components/pages/sign in/SignInPage";
import ForgottenPasswordPage from "../components/pages/sign in/ForgottenPasswordPage";
import ForgottenPasswordVerificationPage from "../components/pages/sign in/ForgottenPasswordVerificationPage";
import CreateNewPasswordPage from "../components/pages/sign in/CreateNewPasswordPage";

const SignInStack = createNativeStackNavigator();

const SignInScreen = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen
        name="signUpPage"
        component={SignInPage}
        options={{ headerShown: false }}
      />
      <SignInStack.Screen
        name="forgottenPasswordPage"
        component={ForgottenPasswordPage}
        options={{ headerShown: false }}
      />
      <SignInStack.Screen
        name="forgottenPasswordVerificationAccountPage"
        component={ForgottenPasswordVerificationPage}
        options={{ headerShown: false }}
      />
      <SignInStack.Screen
        name="createNewPasswordForgottenPage"
        component={CreateNewPasswordPage}
        options={{ headerShown: false }}
      />
    </SignInStack.Navigator>
  );
  
};


export default SignInScreen;

const styles = StyleSheet.create({});
