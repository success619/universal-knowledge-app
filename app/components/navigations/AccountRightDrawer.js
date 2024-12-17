import {
  createDrawerNavigator,
  // DrawerItemList,
} from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";

import MenuDrawer from "./MenuDrawer";
import AccountDrawerContent from "../layout/home/AccountDrawerContent";

const AccountDrawer = createDrawerNavigator();

export default function AccountRightDrawer() {
  const { width } = useWindowDimensions();

  return (
    <AccountDrawer.Navigator
      id="AccountRightDrawer"
      drawerContent={(props) => {
        return <AccountDrawerContent />;
      }}
      screenOptions={{
        swipeEnabled: true,
        drawerType: "back",
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          backgroundColor: "white",
          width: width - 30,
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
      <AccountDrawer.Screen name="MenuDrawer" component={MenuDrawer} />
    </AccountDrawer.Navigator>
  );
}

// const styles = StyleSheet.create({});
