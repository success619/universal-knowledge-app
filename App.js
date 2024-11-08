import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import SignInScreen from "./app/screens/SignInScreen";
import { useEffect, useState } from "react";
import HomeScreen from "./app/screens/HomeScreen";
import LoadingScreen from "./app/screens/LoadingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [signedIn, setSignedIn] = useState(true),
    [loadingApp, setLoadingApp] = useState(true);

  const hideHeader = { headerShown: false };

  useEffect(() => {
    let setLoadingInterval;
    setLoadingInterval = () => setInterval(() => {
      setTimeout(() => {
        return setLoadingApp(false);
      }, 2900);
    }, 3000);

    setLoadingInterval();
  }, []);

  return loadingApp ? (
    <LoadingScreen />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        {signedIn ? (
          <>
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={hideHeader}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="welcomeScreen"
              component={WelcomeScreen}
              options={hideHeader}
            />
            <Stack.Screen
              name="signIn"
              component={SignInScreen}
              options={hideHeader}
            />
            <Stack.Screen
              name="signUp"
              component={SignUpScreen}
              options={hideHeader}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
{
  /* <Text style={{color: "white"}} >Hello Am Success, Am now building android app!</Text> */
}
{
  /* <StatusBar style="auto" /> */
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//
// This is a repository for otpInput
// https://github.com/anday013/react-native-otp-entry?tab=readme-ov-file
