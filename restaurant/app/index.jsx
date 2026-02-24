import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomTitle from "../components/customtitle";
import Colors from "../constants/colortheme";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <CustomTitle title="Falcom Dinner" />

      <Image
        source={require("../assets/images/falcom.jpg")}
        style={styles.heroImage}
      />

      <View style={styles.infoSection}>
        <TouchableOpacity onPress={() => Linking.openURL("")}>
          <Text style={styles.subtitle}> 843-246-7027</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL()}>
          <Text style={styles.subtitle}>
            {" "}
            1647 Church St, Conway, SC 29526{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/BBzTvC7JSrabswFn8")
          }
        >
          <Text
            style={[
              styles.subtitle,
              { color: Colors.white, textDecorationLine: "underline" },
            ]}
          >
            Visit Website
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => router.push("menu")}
      >
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 24,
    justifyContent: "center",
  },
  heroImage: { width: 300, height: 200, borderRadius: 15, marginVertical: 20 },
  infoSection: { marginVertical: 20, alignItems: "center" },
  subtitle: { fontSize: 20, color: Colors.white, marginBottom: 10 },
  navButton: {
    backgroundColor: Colors.button,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: { color: Colors.white, fontSize: 18, fontWeight: "bold" },
});
