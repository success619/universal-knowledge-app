import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NameFormPage from "../components/pages/sign up/NameFormPage";
import DateOfBirthFormPage from "../components/pages/sign up/DateOfBirthFormPage";
import EmailAndPasswordPage from "../components/pages/sign up/EmailAndPasswordPage";
import VerifyEmailPage from "../components/pages/sign up/VerifyEmailPage";

const SignUpStack = createNativeStackNavigator();

export default function SignUpScreen({}) {
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen
        name="nameFormPage"
        component={NameFormPage}
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen
        name="dateOfBirthPage"
        component={DateOfBirthFormPage}
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen
        name="emailAndPasswordPage"
        component={EmailAndPasswordPage}
        options={{ headerShown: false }}
      />
      <SignUpStack.Screen
        name="verifyEmailPage"
        component={VerifyEmailPage}
        options={{ headerShown: false }}
      />
    </SignUpStack.Navigator>
  );
}
