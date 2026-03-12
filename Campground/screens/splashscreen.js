import { ImageBackground, StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ onLayout }) => {
  return (
    <ImageBackground
      source={require("../assets/images/splash_image.jpg")}
      style={styles.background}
      onLayout={onLayout}
    >
      <View style={styles.overlay}>
        <Text style={styles.splashText}>Loading</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    borderRadius: 10,
  },
  splashText: {
    fontSize: 32,
    color: "#121212",
    textAlign: "center",
  },
});

export default SplashScreen;
