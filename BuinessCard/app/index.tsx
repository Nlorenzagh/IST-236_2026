import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Page() {
  const githubUrl = "https://github.com/Nlorenzagh/IST-236_2026.git";

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Neil Lorenzana</Text>

        <View style={styles.infoSection}>
          <Text style={styles.subtitle}>nlorenza@hgtc.edu</Text>
          <Text style={styles.subtitle}>843-246-7027</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(githubUrl)}
        >
          <Text style={styles.buttonText}>GitHub Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1c228d",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#aca023",
    textAlign: "center",
  },
  infoSection: {
    marginVertical: 20,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#000000",
    lineHeight: 30,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#24292e",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
