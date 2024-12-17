import { ScrollView, View, SafeAreaView, Image, Text } from "react-native";
import {
  createDrawerNavigator,
  // DrawerItemList,
} from "@react-navigation/drawer";

import { COLORS } from "../../constants/constants";
import NotificationSvg from "../../assets/svg/NotificationSvg";
import logo from "../../assets/universalLogo.png";

import HomeScreen from "../../screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";

const Drawer = createDrawerNavigator();

const MenuLabel = ({
  icon,
  iconStyle,
  iconType,
  labelStyle,
  LabelName,
  onPress,
  focusedStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        focusedStyle,
        {
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          alignContent: "center",
          marginHorizontal: "auto",
          paddingLeft: 30,
          borderRadius: 10,
          width: "90%",
          paddingVertical: 7,
        },
      ]}
    >
      <Image
        source={icon}
        style={[
          iconStyle,
          {
            resizeMode: "contain",
          },
        ]}
      />
      <Text
        style={[
          labelStyle,
          {
            fontSize: 17,
            fontWeight: "500",
            flexWrap: "nowrap",
            textAlign: "center",
          },
        ]}
      >
        {LabelName}
      </Text>
    </TouchableOpacity>
  );
};

export default function MenuDrawer() {
  const navigation = useNavigation();

  const [focusedLabel, setFocusLabel] = useState(String);

  const labelPressed = useCallback(
    (focusedRouteVal) => {
      switch (focusedRouteVal) {
        case "Library":
          setFocusLabel("Library");
          navigation.navigate("Library");
          break;

        case "Courses":
          setFocusLabel("Courses");
          navigation.navigate("Courses");
          break;

        case "Notes":
          setFocusLabel("Notes");
          navigation.navigate("Notes");
          break;

        case "Trendings":
          setFocusLabel("Trendings");
          navigation.navigate("Trendings");
          break;

        case "Monietize":
          setFocusLabel("Monietize");
          navigation.navigate("Monietize");
          break;

        case "PaymentMethod":
          setFocusLabel("PaymentMethod");
          navigation.navigate("PaymentMethod");
          break;

        case "Schools":
          setFocusLabel("Schools");
          navigation.navigate("Schools");
          break;

        case "TextBooks":
          setFocusLabel("TextBooks");
          navigation.navigate("TextBooks");
          break;

        case "Topics":
          setFocusLabel("Topics");
          navigation.navigate("Topics");
          break;

        case "Settings":
          setFocusLabel("Settings");
          navigation.navigate("Settings");
          break;

        default:
          break;
      }
    },
    [navigation]
  );

  return (
    <Drawer.Navigator
      id="MenuLeftDrawer"
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ marginTop: 30 }}>
            <StatusBar />
            <View
              style={{
                width: "100%",
                height: 100,
                // backgroundColor: COLORS.primary,
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                display: "flex",
                flexDirection: "row",
                gap: 0,
                marginLeft: -30,
                marginBottom: 20
              }}
            >
              <Image
                source={logo}
                style={{
                  resizeMode: "contain",
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "blue",
                  marginLeft: -3,
                }}
              >
                nowledge
              </Text>
            </View>

            <ScrollView>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <MenuLabel
                  LabelName={"Library"}
                  icon={require("../../assets/icons//library.png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("Library")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "Library"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Courses"}
                  icon={require("../../assets/icons/courses.png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("Courses")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "Courses"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Notes"}
                  icon={require("../../assets/icons/notes.png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("Notes")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "Notes" ? COLORS.menuFocused : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Trendings"}
                  icon={require("../../assets/icons/trendings.png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("Trendings")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "Trendings"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Monietization"}
                  icon={require("../../assets/icons/money.png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("Monietize")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "Monietize"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Payment Method"}
                  icon={require("../../assets/icons/creditCard.png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("PaymentMethod")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "PaymentMethod"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Schools"}
                  icon={require("../../assets/icons/schools.png")}
                  iconStyle={{
                    width: 32,
                    height: 32
                  }}
                  onPress={() => labelPressed("Schools")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "Schools"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Text Books"}
                  icon={require("../../assets/icons/textbooks.png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("TextBooks")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "TextBooks"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Topics"}
                  icon={require("../../assets/icons/topics (1).png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("Topics")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "Topics"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
                <MenuLabel
                  LabelName={"Settings"}
                  icon={require("../../assets/icons/settings.png")}
                  iconStyle={{
                    width: 30,
                    height: 30
                  }}
                  onPress={() => labelPressed("Settings")}
                  focusedStyle={{
                    backgroundColor:
                      focusedLabel === "Settings"
                        ? COLORS.menuFocused
                        : undefined,
                  }}
                />
              </View>
              {/* <DrawerItemList {...props} /> */}
            </ScrollView>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerType: "slide",
        drawerPosition: "left",
        headerShown: false,
        drawerStyle: {
          backgroundColor: "white",
          width: 300,
        },
        headerStyle: {
          backgroundColor: "white",
        },
        drawerLabelStyle: {
          color: "black",
          fontSize: 18,
          fontWeight: "800",
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        options={{
          drawerLabel: "HomeScreen",
          title: "HomeScreen",
          headerShadowVisible: false,
          drawerIcon: () => (
            <NotificationSvg
              width={"24"}
              height={"24"}
              style={{
                margin: 0,
                padding: 0,
                fill: "black",
                marginLeft: 20,
              }}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
}
