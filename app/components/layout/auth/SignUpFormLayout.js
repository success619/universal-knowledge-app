const { ScrollView, StatusBar, View, Text, Image, StyleSheet } = require("react-native");

const SignUpFormLayout = ({ children }) => {
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      <StatusBar hidden />
      <View style={styles.containerWrapper}>
        <View style={styles.container}>
          <Image
            source={require("../../../assets/signUpBg.png")}
            style={styles.signUpImage}
          />
          <View style={styles.appTitleWrapper}>
            <Text style={styles.appTitle}>Universal Knowledge</Text>
          </View>          
        </View>
        {children}
      </View>
    </ScrollView>
  );
};

export default SignUpFormLayout;

const styles = StyleSheet.create({
  appTitle: {
    color: "blue",
    fontWeight: "700",
    fontSize: 20,
  },
  appTitleWrapper: {
    position: "absolute",
    top: 5,
    right: 3,
  },
  containerWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  container: {
    width: "100%",
    height: 250,
  },
  signUpImage: {
    flex: 1,
    width: "100%",
    height: 250,
  }
});
