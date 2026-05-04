import { useContext, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ThemeContext } from "../context/themecontext";
import { MONSTERS } from "../data/monstersdata";

const BestiaryScreen = () => {
  const { colors, isDarkMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  const filteredMonsters = MONSTERS.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase()),
  );

  const MonsterItem = ({ item }) => {
    const imageSource =
      typeof item.image === "string" ? { uri: item.image } : item.image;

    return (
      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: isDarkMode ? "#111" : "#E8E8E8" },
          ]}
        >
          <Image
            source={imageSource}
            style={styles.monsterImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.monsterName, { color: colors.text }]}>
            {item.name.toUpperCase()}
          </Text>

          <View style={styles.statsRow}>
            <Text style={[styles.statsText, { color: colors.text }]}>
              HP: {item.hp}
            </Text>
            <Text style={[styles.statsText, { color: colors.text }]}>
              MP: {item.mp}
            </Text>
            <Text style={[styles.statsText, { color: colors.text }]}>
              ATK: {item.atk}
            </Text>
            <Text style={[styles.statsText, { color: colors.text }]}>
              DEF: {item.def}
            </Text>
            <Text style={[styles.statsText, { color: colors.text }]}>
              AG: {item.ag}
            </Text>
          </View>

          <Text style={[styles.detailText, { color: colors.text }]}>
            <Text style={{ fontWeight: "bold" }}>SPELLS:</Text>{" "}
            {item.spells || item.spell || "None"}
          </Text>
          <Text style={[styles.detailText, { color: colors.text }]}>
            <Text style={{ fontWeight: "bold" }}>RESIST:</Text>{" "}
            {item.resistance}
          </Text>

          <Text
            style={[
              styles.locationText,
              { color: isDarkMode ? "#888" : "#666" },
            ]}
          >
            LOCATION: {item.location}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[
          styles.searchBar,
          {
            borderColor: colors.border,
            color: colors.text,
            backgroundColor: colors.card,
          },
        ]}
        placeholder="SEARCH MONSTERS..."
        placeholderTextColor={isDarkMode ? "#666" : "#999"}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredMonsters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MonsterItem item={item} />}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchBar: {
    height: 45,
    borderWidth: 2,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
  card: {
    padding: 12,
    marginBottom: 12,
    borderWidth: 3,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageContainer: {
    width: 85,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  monsterImage: { width: 75, height: 75 },
  infoContainer: { flex: 1 },
  monsterName: {
    fontSize: 18,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 4,
  },
  statsText: {
    fontFamily: "monospace",
    fontSize: 11,
    marginRight: 10,
  },
  detailText: {
    fontSize: 11,
    fontFamily: "sans-serif",
    marginTop: 2,
  },
  locationText: {
    fontSize: 10,
    marginTop: 6,
    fontStyle: "italic",
  },
  listPadding: { paddingBottom: 30 },
});

export default BestiaryScreen;
