import { Pressable, StyleSheet, Text } from "react-native";

export default function ReserveButton({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Reserve Now</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2f855a",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "raleway",
  },
});
