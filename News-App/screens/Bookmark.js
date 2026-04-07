import { StyleSheet, Text, View } from "react-native";

function BookmarkedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your bookmarked articles will appear here next week!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#00667d",
    textAlign: "center",
    padding: 20,
  },
});

export default BookmarkedScreen;
