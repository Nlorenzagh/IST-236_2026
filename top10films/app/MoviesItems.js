import { Image, StyleSheet, Text, View } from "react-native";

function MoviesItems(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>{props.rating} / 10</Text>
      </View>
    </View>
  );
}

export default MoviesItems;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  imageContainer: {},
  itemImage: {},
  ratingContainer: {},
  itemRating: {},
});
