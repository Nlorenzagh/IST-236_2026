import { useRouter } from "expo-router";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import CustomTitle from "../components/customtitle";
import MenuItem from "../components/menuitem"; // Import the component we created above
import Colors from "../constants/colortheme";

const MENU_DATA = [
  {
    id: "1",
    name: "Classic Burger",
    price: 12.99,
    image: require("../assets/images/burger.jpg"),
  },
  {
    id: "2",
    name: "Steak",
    price: 18.5,
    image: require("../assets/images/steak.jpg"),
  },
  {
    id: "3",
    name: "Pizza",
    price: 8.25,
    image: require("../assets/images/pizza.jpg"),
  },
  {
    id: "4",
    name: "Chicken Sandwich",
    price: 12.99,
    image: require("../assets/images/chicken_sandwich.jpg"),
  },
  {
    id: "5",
    name: "Fish and Chips",
    price: 8.75,
    image: require("../assets/images/fish_chip.jpg"),
  },
];

export default function MenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <CustomTitle title="Our Menu" />

      <FlatList
        data={MENU_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem name={item.name} price={item.price} image={item.image} />
        )}
        contentContainerStyle={styles.listPadding}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
  },
  listPadding: {
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: Colors.button,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
