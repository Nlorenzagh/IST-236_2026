import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function NavButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "CustomFont-Regular",
  },
});
