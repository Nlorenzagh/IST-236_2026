import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colortheme";

const MenuItem = ({ name, price, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: Colors.white || "#fff",
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  details: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 16,
    color: Colors.accent || "#aca023",
    marginTop: 4,
  },
});

export default MenuItem;
