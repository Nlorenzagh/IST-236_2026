import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colortheme";

export default function CustomTitle({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: Colors.accent,
    textAlign: "center",
    fontFamily: "Restaurant-Font",
    marginVertical: 15,
  },
});
