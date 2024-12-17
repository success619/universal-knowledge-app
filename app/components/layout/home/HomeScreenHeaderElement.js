import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderLayout from "./HeaderLayout";
import { useNavigation } from "@react-navigation/native";


export default function HomeScreenHeaderElement() {
  return (
    <SafeAreaView>
      <StatusBar />
      <HeaderLayout />
    </SafeAreaView>
  )
}