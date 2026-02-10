import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Magic8Ball() {
  const [answer, setAnswer] = useState("Ask a question");

  const getAnswer = async () => {
    try {
      const asset = Asset.fromModule(require("MagicEightBallResponses.txt"));
      await asset.downloadAsync();

      const content = await FileSystem.readAsStringAsync(
        asset.localUri || asset.uri,
      );

      const lines = content.split("\n").filter((line) => line.trim() !== "");
      const randomAnswer = lines[Math.floor(Math.random() * lines.length)];

      setAnswer(randomAnswer);
    } catch (error) {
      setAnswer("error");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Your question..." style={styles.input} />
      <Button title="Shake Ball" onPress={getAnswer} />

      <View style={styles.ball}>
        <Text style={styles.text}>{answer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: {
    borderBottomWidth: 1,
    color: "white",
    width: 200,
    marginBottom: 20,
    textAlign: "center",
  },
  ball: {
    width: 150,
    height: 150,
    backgroundColor: "blue",
    borderRadius: 75,
    justifyContent: "center",
    marginTop: 30,
  },
  text: { color: "white", textAlign: "center", padding: 10 },
});
