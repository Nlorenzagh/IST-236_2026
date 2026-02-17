import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet
} from "react-native";
export default function App() {
  const [movieItems, setMoviesItems] = useState([
    {
      name: "The Cable Guy",
      image: require("./assets/images/cableguy.jpg"),
      rating: "8/10",
    },
    {
      name: "Sonic The Hedgehog 3",
      image: require("./assets/images/sonic3.jpg"),
      rating: "8/10",
    },
    {
      name: "Final Fantasy VII Advent Children",
      image: require("./assets/images/ff7AC.jpg"),
      rating: "8/10",
    },
    {
      name: "The Wild Robot",
      image: require("./assets/images/wildrobot.jpg"),
      rating: "9/10",
    },
    {
      name: "Transfomers (2007)",
      image: require("./assets/images/tf.jpg"),
      rating: "7/10",
    },
    {
      name: "Puss In Boots The Last Wish",
      image: require("./assets/images/lastwish.jpg"),
      rating: "8/10",
    },
    {
      name: "Alien",
      image: require("./assets/images/alien.jpg"),
      rating: "7/10",
    },
    {
      name: "Top Gun",
      image: require("./assets/images/topgun.jpg"),
      rating: "7/10",
    },
    {
      name: "Spider-Man 2",
      image: require("./assets/images/sm2.jpg"),
      rating: "8/10",
    },
    {
      name: "The Minecraft Movie",
      image: require("./assets/images/mcm.jpg"),
      rating: "6/10",
    },
  ]);

  return (
    <>
      <statusbar style="dark" />
      <SafeAreaView style={styles.rootcontainer}>
        <view style={styles.titlecontainer}>
          <text style={styles.title}> Top 10 Movies</text>
        </view>
        <view style={styles.listcontainer}>
          <ScrollView></ScrollView>
        </view>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    backgroundColor: "FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
