import { useCallback, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants/constants";

export default function AccountDrawerContent() {
  const [showStar, setShowStar] = useState(false);
  const [showCredit, setShowCredit] = useState(false);
  const [showReadingPoint, setShowReadingPoint] = useState(false);
  const [showBuyPoint, setShowBuyPoint] = useState(false);
  const [showRefferal, setShowRefferal] = useState(false);

  const { height } = useWindowDimensions();

  const toogleSecretVisible = useCallback(
    (type) => {
      switch (type) {
        case "Star":
          setShowStar(!showStar);
          break;
        case "Credit":
          setShowCredit(!showCredit);
          break;
        case "ReadingPoint":
          setShowReadingPoint(!showReadingPoint);
          break;
        case "BuyPoint":
          setShowBuyPoint(!showBuyPoint);
          break;
        case "RefferalPoint":
          setShowRefferal(!showRefferal);
          break;

        default:
          break;
      }
    },
    [showBuyPoint, showReadingPoint, showRefferal, showStar, showCredit]
  );

  return (
    <SafeAreaView>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePicture}
          source={require("../../../assets/myPicture.jpg")}
        />
        <Text style={{ fontSize: 22, fontWeight: "700" }}>
          Agu Ogan Success
        </Text>
      </View>
      <TouchableOpacity style={styles.manageAccount}>
        <Text style={styles.manageAccountText}>Manage Account</Text>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.scrollView,
          {
            height: height - 300 - 10,
          },
        ]}
      >
        <View style={styles.horizontalLine}></View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentWrapperText1}>Stars</Text>
          <Text style={styles.contentWrapperText2}>
            {showStar ? 0.00 : "****"}
          </Text>
          <Pressable
            style={styles.showHideIconImageWrapper}
            onPress={() => toogleSecretVisible("Star")}
          >
            <Image
              style={styles.showHideIconImage}
              source={
                showStar
                  ? require("../../../assets/icons/hideSecret.png")
                  : require("../../../assets/icons/showSecret.png")
              }
            />
          </Pressable>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentWrapperText1}>Credits</Text>
          <Text style={styles.contentWrapperText2}>
            {showCredit ? 0.00 : "****"}
          </Text>
          <Pressable
            style={styles.showHideIconImageWrapper}
            onPress={() => toogleSecretVisible("Credit")}
          >
            <Image
              style={styles.showHideIconImage}
              source={
                showCredit
                  ? require("../../../assets/icons/hideSecret.png")
                  : require("../../../assets/icons/showSecret.png")
              }
            />
          </Pressable>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentWrapperText1}>Reading Points</Text>
          <Text style={styles.contentWrapperText2}>
            {showReadingPoint ? 0.00 : "****"}
          </Text>
          <Pressable
            style={styles.showHideIconImageWrapper}
            onPress={() => toogleSecretVisible("ReadingPoint")}
          >
            <Image
              style={styles.showHideIconImage}
              source={
                showReadingPoint
                  ? require("../../../assets/icons/hideSecret.png")
                  : require("../../../assets/icons/showSecret.png")
              }
            />
          </Pressable>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentWrapperText1}>BuyCoin</Text>
          <Text style={styles.contentWrapperText2}>
            {showBuyPoint ? 0.00 : "****"}
          </Text>
          <Pressable
            style={styles.showHideIconImageWrapper}
            onPress={() => toogleSecretVisible("BuyPoint")}
          >
            <Image
              style={styles.showHideIconImage}
              source={
                showBuyPoint
                  ? require("../../../assets/icons/hideSecret.png")
                  : require("../../../assets/icons/showSecret.png")
              }
            />
          </Pressable>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.contentWrapperText1}>Referral Points</Text>
          <Text style={styles.contentWrapperText2}>
            {showRefferal ? 0.00 : "****"}
          </Text>
          <Pressable
            style={styles.showHideIconImageWrapper}
            onPress={() => toogleSecretVisible("RefferalPoint")}
          >
            <Image
              style={styles.showHideIconImage}
              source={
                showRefferal
                  ? require("../../../assets/icons/hideSecret.png")
                  : require("../../../assets/icons/showSecret.png")
              }
            />
          </Pressable>
        </View>
        <View style={styles.horizontalLine}></View>
      </ScrollView>
      <View style={{ height: 20 }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    height: 200,
    // backgroundColor: COLORS.primary,
    marginTop: 15,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  profilePicture: {
    resizeMode: "contain",
    height: 150,
    width: 150,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "brown",
  },
  manageAccount: {
    marginHorizontal: "auto",
    backgroundColor: COLORS.menuFocused,
    borderRadius: 2,
  },
  manageAccountText: {
    // fontFamily: "serif",
    fontWeight: "800",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  scrollView: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginVertical: 5,
    // marginHorizontal: "auto"
  },
  contentWrapperText1: {
    fontSize: 20,
    fontWeight: "700",
    color: "brown",
  },
  contentWrapperText2: {
    fontSize: 20,
    fontWeight: "700",
  },
  horizontalLine: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
    marginVertical: 20,
  },
  showHideIconImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  showHideIconImageWrapper: {
    width: 24,
    height: 24,
  },
});
