import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function ListItem({ headline, date, imageUrl, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.headline} numberOfLines={2}>
          {headline}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    overflow: "hidden",
  },
  image: { width: "100%", height: 150 },
  infoContainer: { padding: 10 },
  headline: { fontWeight: "bold", fontSize: 16 },
  date: { color: "#2c7cc1", marginTop: 4 },
  pressed: { opacity: 0.7 },
});

export default ListItem;
