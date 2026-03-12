import { StyleSheet, Text } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: "white",
    fontFamily: "raleway",
    textAlign: "center",
    marginBottom: 30,
  },
});
