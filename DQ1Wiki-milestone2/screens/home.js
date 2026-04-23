import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../context/themecontext";

const HomeScreen = ({ navigation }) => {
  const { colors } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  const menuItems = [
    { name: "Bestiary", screen: "Bestiary" },
    { name: "Items", screen: "Items" },
    { name: "Maps", screen: "Maps" },
    { name: "Guide", screen: "Walkthrough" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: "#000" }]}>
      <View style={styles.searchSection}>
        <TextInput
          style={[styles.searchBar, { color: "#FFF", borderColor: "#FFF" }]}
          placeholder="SEARCH..."
          placeholderTextColor="#666"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>WELCOME TO</Text>
        <Text style={styles.brandText}>WikiQuest</Text>
      </View>

      <View style={styles.commandWindow}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>COMMAND</Text>
        </View>

        <View style={styles.gridContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.menuOption}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.optionContent}>
                <Text style={styles.arrowIcon}>▶</Text>
                <Text style={styles.menuText}>{item.name.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.copyright}>
          © 1986, 2019 ARMOR PROJECT / BIRD STUDIO / SQUARE ENIX
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  searchSection: {
    marginTop: 40,
  },
  searchBar: {
    height: 50,
    borderWidth: 3,
    paddingHorizontal: 15,
    fontFamily: "sans-serif",
    fontSize: 16,
    backgroundColor: "#000",
  },
  welcomeSection: {
    alignItems: "center",
    marginVertical: 10,
  },
  welcomeText: {
    color: "#ffffff",
    fontFamily: "sans-serif",
    fontSize: 14,
    letterSpacing: 2,
  },
  brandText: {
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: 36,
    marginTop: -5,
  },
  commandWindow: {
    borderWidth: 4,
    borderColor: "#FFF",
    borderRadius: 4,
    padding: 25,
    backgroundColor: "#000",
    position: "relative",
    marginVertical: 20,
  },
  labelContainer: {
    position: "absolute",
    top: -18,
    left: 30,
    backgroundColor: "#000",
    paddingHorizontal: 10,
  },
  labelText: {
    color: "#FFF",
    fontFamily: "sans-serif-condensed",
    fontSize: 20,
    fontWeight: "10",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuOption: {
    width: "48%",
    marginVertical: 12,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    color: "#FFF",
    fontSize: 16,
    marginRight: 8,
  },
  menuText: {
    color: "#FFF",
    fontFamily: "sans-serif",
    fontWeight: "80",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
  },
  copyright: {
    color: "#666",
    fontSize: 10,
    fontFamily: "sans-serif",
    textAlign: "center",
  },
});

export default HomeScreen;
