import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const HeaderLayout = () => {
  const navigation = useNavigation();

  const onMenuButtonClick = () => {
    navigation.getParent("MenuLeftDrawer").toggleDrawer();
  };

  const onAccountButtonClick = () => {
    navigation.getParent("AccountRightDrawer").toggleDrawer();
  };

  const onNotificationButtonClick = () => {
    navigation.navigate("Notifications");
  };

  const onSearchButtonClick = () => {
    navigation.navigate("Search");
  };

  const onStarButtonClick = () => {
    navigation.navigate("Monietize");
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.appLogoContainer}>
        <View style={styles.appLogoWrapper}>
          <Image
            style={styles.logo}
            source={require("../../../assets/universalLogo.png")}
          />
          <Text style={styles.logoText}>nowledge</Text>
        </View>
        <TouchableOpacity
          style={styles.starWrapper}
          onPress={onStarButtonClick}
        >
          <Image
            style={styles.star}
            source={require("../../../assets/icons/star.png")}
          />
          <Text style={styles.starCount}>0</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={onSearchButtonClick}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <Path d="M 10 2 C 5.590603 2 2 5.5906063 2 10 C 2 14.409394 5.590603 18 10 18 C 11.929744 18 13.635779 17.22512 15.019531 16.082031 L 20.71875 21.78125 A 0.75130096 0.75130096 0 1 0 21.78125 20.71875 L 16.082031 15.019531 C 17.225119 13.635778 18 11.929742 18 10 C 18 5.5906063 14.409397 2 10 2 z M 10 3.5 C 13.598737 3.5 16.5 6.401265 16.5 10 C 16.5 13.598735 13.598737 16.5 10 16.5 C 6.4012627 16.5 3.5 13.598735 3.5 10 C 3.5 6.401265 6.4012627 3.5 10 3.5 z" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNotificationButtonClick}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 64 64"
          >
            <Path d="M 31.234375 4 C 30.09375 4 29.066406 4.636719 28.550781 5.65625 L 27.207031 8.347656 C 21.09375 9.664063 16.277344 14.71875 15.472656 21.140625 L 13.300781 38.53125 C 13.128906 39.914063 12.628906 41.253906 11.859375 42.40625 L 7.242188 49.335938 C 6.625 50.257813 6.570313 51.4375 7.09375 52.417969 C 7.617188 53.394531 8.628906 54 9.734375 54 L 26.078125 54 C 26.566406 57.386719 29.480469 60 33 60 C 36.519531 60 39.433594 57.386719 39.921875 54 L 56.265625 54 C 57.371094 54 58.386719 53.394531 58.90625 52.417969 C 59.429688 51.4375 59.375 50.257813 58.761719 49.335938 L 54.140625 42.40625 C 53.371094 41.253906 52.871094 39.914063 52.699219 38.53125 L 50.527344 21.140625 C 49.722656 14.71875 44.90625 9.664063 38.792969 8.347656 L 37.449219 5.65625 C 36.9375 4.636719 35.90625 4 34.765625 4 Z M 31.234375 6 L 34.765625 6 C 35.144531 6 35.488281 6.210938 35.65625 6.554688 L 36.398438 8.035156 C 36.144531 8.023438 35.898438 8 35.640625 8 L 30.359375 8 C 30.105469 8 29.855469 8.023438 29.601563 8.035156 L 30.34375 6.554688 C 30.511719 6.210938 30.855469 6 31.234375 6 Z M 30.359375 10 L 35.640625 10 C 42.183594 10 47.726563 14.894531 48.539063 21.386719 L 50.714844 38.78125 C 50.925781 40.46875 51.535156 42.105469 52.476563 43.515625 L 57.09375 50.441406 C 57.394531 50.894531 57.230469 51.3125 57.144531 51.472656 C 57.058594 51.628906 56.804688 52 56.265625 52 L 9.734375 52 C 9.195313 52 8.941406 51.632813 8.855469 51.472656 C 8.769531 51.3125 8.605469 50.894531 8.90625 50.445313 L 13.203125 44 L 41.167969 44 C 41.71875 44 42.167969 43.550781 42.167969 43 C 42.167969 42.449219 41.71875 42 41.167969 42 L 14.347656 42 C 14.816406 40.980469 15.144531 39.894531 15.285156 38.78125 L 17.457031 21.386719 C 18.269531 14.894531 23.816406 10 30.359375 10 Z M 34.875 13 C 34.324219 13 33.875 13.449219 33.875 14 C 33.875 14.550781 34.324219 15 34.875 15 C 36.675781 15 38.433594 15.628906 39.816406 16.777344 C 40.003906 16.929688 40.230469 17.007813 40.453125 17.007813 C 40.742188 17.007813 41.027344 16.882813 41.226563 16.644531 C 41.578125 16.21875 41.519531 15.589844 41.09375 15.234375 C 39.351563 13.792969 37.140625 13 34.875 13 Z M 42.832031 18.15625 C 42.703125 18.160156 42.574219 18.1875 42.449219 18.246094 C 41.945313 18.472656 41.71875 19.0625 41.949219 19.566406 C 42.304688 20.359375 42.527344 21.210938 42.601563 22.089844 C 42.648438 22.609375 43.082031 23 43.597656 23 C 43.625 23 43.65625 23 43.683594 22.996094 C 44.234375 22.949219 44.640625 22.464844 44.59375 21.910156 C 44.5 20.808594 44.21875 19.746094 43.769531 18.746094 C 43.597656 18.367188 43.222656 18.148438 42.832031 18.15625 Z M 44.917969 42 C 44.367188 42 43.917969 42.449219 43.917969 43 C 43.917969 43.550781 44.367188 44 44.917969 44 L 49.167969 44 C 49.71875 44 50.167969 43.550781 50.167969 43 C 50.167969 42.449219 49.71875 42 49.167969 42 Z M 13 46 C 12.449219 46 12 46.449219 12 47 L 12 49 C 12 49.550781 12.449219 50 13 50 C 13.550781 50 14 49.550781 14 49 L 14 47 C 14 46.449219 13.550781 46 13 46 Z M 18 46 C 17.449219 46 17 46.449219 17 47 L 17 49 C 17 49.550781 17.449219 50 18 50 C 18.550781 50 19 49.550781 19 49 L 19 47 C 19 46.449219 18.550781 46 18 46 Z M 23 46 C 22.449219 46 22 46.449219 22 47 L 22 49 C 22 49.550781 22.449219 50 23 50 C 23.550781 50 24 49.550781 24 49 L 24 47 C 24 46.449219 23.550781 46 23 46 Z M 28 46 C 27.449219 46 27 46.449219 27 47 L 27 49 C 27 49.550781 27.449219 50 28 50 C 28.550781 50 29 49.550781 29 49 L 29 47 C 29 46.449219 28.550781 46 28 46 Z M 33 46 C 32.449219 46 32 46.449219 32 47 L 32 49 C 32 49.550781 32.449219 50 33 50 C 33.550781 50 34 49.550781 34 49 L 34 47 C 34 46.449219 33.550781 46 33 46 Z M 38 46 C 37.449219 46 37 46.449219 37 47 L 37 49 C 37 49.550781 37.449219 50 38 50 C 38.550781 50 39 49.550781 39 49 L 39 47 C 39 46.449219 38.550781 46 38 46 Z M 43 46 C 42.449219 46 42 46.449219 42 47 L 42 49 C 42 49.550781 42.449219 50 43 50 C 43.550781 50 44 49.550781 44 49 L 44 47 C 44 46.449219 43.550781 46 43 46 Z M 48 46 C 47.449219 46 47 46.449219 47 47 L 47 49 C 47 49.550781 47.449219 50 48 50 C 48.550781 50 49 49.550781 49 49 L 49 47 C 49 46.449219 48.550781 46 48 46 Z M 53 46 C 52.449219 46 52 46.449219 52 47 L 52 49 C 52 49.550781 52.449219 50 53 50 C 53.550781 50 54 49.550781 54 49 L 54 47 C 54 46.449219 53.550781 46 53 46 Z M 28.101563 54 L 37.898438 54 C 37.433594 56.277344 35.414063 58 33 58 C 30.585938 58 28.566406 56.277344 28.101563 54 Z" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity onPress={onMenuButtonClick}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <Path d="M5,7h2h12c1.1,0,2-0.9,2-2s-0.9-2-2-2H7H5C3.9,3,3,3.9,3,5S3.9,7,5,7z" />
            <Path d="M19,10h-3H5c-1.1,0-2,0.9-2,2s0.9,2,2,2h11h3c1.1,0,2-0.9,2-2S20.1,10,19,10z" />
            <Path d="M19,17h-6H5c-1.1,0-2,0.9-2,2s0.9,2,2,2h8h6c1.1,0,2-0.9,2-2S20.1,17,19,17z" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.avatarImageContainer}
          onPress={onAccountButtonClick}
        >
          <Image
            style={styles.avatarImage}
            source={require("../../../assets/icons/avatar.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderLayout;

const styles = StyleSheet.create({
  appLogoContainer: {
    height: 40,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  appLogoWrapper: {
    height: 40,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 0,
    alignItems: "center",
  },
  avatarImage: {
    width: 35,
    height: 35,
  },
  avatarImageContainer: {
    width: 35,
    height: 35,
    // marginTop: 2
  },
  logo: {
    height: 40,
    width: 50,
  },
  logoText: {
    fontSize: 15,
    fontWeight: "700",
    color: "blue",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
    shadowOpacity: 0.2,
    shadowColor: "black",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignContent: "center",
    alignItems: "center",
  },
  starWrapper: {
    marginHorizontal: "auto",
    position: "relative",
  },
  star: {
    width: 24,
    height: 24,
  },
  starCount: {
    position: "absolute",
    top: -5,
    right: -0,
    fontWeight: "800",
  },
});
