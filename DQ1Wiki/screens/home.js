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
  const { colors, isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  const menuItems = [
    { name: "Bestiary", screen: "Bestiary" },
    { name: "Items", screen: "Items" },
    { name: "Maps", screen: "Maps" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.searchSection}>
        <TextInput
          style={[
            styles.searchBar,
            {
              color: colors.text,
              borderColor: colors.border,
              backgroundColor: colors.card,
            },
          ]}
          placeholder="SEARCH..."
          placeholderTextColor={isDarkMode ? "#666" : "#999"}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.welcomeSection}>
        <Text
          style={[
            styles.welcomeText,
            { color: isDarkMode ? "#ffffff" : "#444" },
          ]}
        >
          WELCOME TO
        </Text>
        <Text style={[styles.brandText, { color: colors.text }]}>
          WikiQuest
        </Text>

        <TouchableOpacity
          style={[styles.themeToggle, { borderColor: colors.border }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.themeToggleText, { color: colors.text }]}>
            {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.commandWindow,
          { borderColor: colors.border, backgroundColor: colors.background },
        ]}
      >
        <View
          style={[
            styles.labelContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Text style={[styles.labelText, { color: colors.text }]}>
            COMMAND
          </Text>
        </View>

        <View style={styles.gridContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.menuOption}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.optionContent}>
                <Text style={[styles.arrowIcon, { color: colors.text }]}>
                  ▶
                </Text>
                <Text style={[styles.menuText, { color: colors.text }]}>
                  {item.name.toUpperCase()}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text
          style={[styles.copyright, { color: isDarkMode ? "#666" : "#999" }]}
        >
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
  },
  welcomeSection: {
    alignItems: "center",
    marginVertical: 10,
  },
  welcomeText: {
    fontFamily: "sans-serif",
    fontSize: 14,
    letterSpacing: 2,
  },
  brandText: {
    fontFamily: "sans-serif",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: -5,
  },
  themeToggle: {
    marginTop: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  themeToggleText: {
    fontSize: 10,
    fontFamily: "sans-serif-condensed",
  },
  commandWindow: {
    borderWidth: 4,
    borderRadius: 4,
    padding: 25,
    position: "relative",
    marginVertical: 20,
  },
  labelContainer: {
    position: "absolute",
    top: -18,
    left: 30,
    paddingHorizontal: 10,
  },
  labelText: {
    fontFamily: "sans-serif-condensed",
    fontSize: 20,
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
    fontSize: 16,
    marginRight: 8,
  },
  menuText: {
    fontFamily: "sans-serif",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
  },
  copyright: {
    fontSize: 10,
    fontFamily: "sans-serif",
    textAlign: "center",
  },
});

export default HomeScreen;
