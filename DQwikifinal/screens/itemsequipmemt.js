import { useContext, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../context/themecontext";
import { ITEMS } from "../data/itemandequipdata";

const ItemsScreen = () => {
  const { colors, isDarkMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const categories = [
    "ALL",
    "WEAPON",
    "ARMOR",
    "SHIELD",
    "ACCESSORY",
    "TOOL",
    "KEY-ITEMS",
  ];

  const filteredItems = ITEMS.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "ALL" || item.type.toUpperCase().includes(filter);
    return matchesSearch && matchesFilter;
  });

  const ItemCard = ({ item }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={styles.headerRow}>
        <Text style={[styles.itemName, { color: colors.text }]}>
          {item.name.toUpperCase()}
        </Text>
        <Text
          style={[styles.itemType, { color: isDarkMode ? "#888" : "#666" }]}
        >
          [{item.type.toUpperCase()}]
        </Text>
      </View>

      <Text style={[styles.effectText, { color: colors.text }]}>
        {item.effect}
      </Text>

      <View style={styles.statsRow}>
        {item.atk && (
          <Text
            style={[
              styles.statText,
              { color: isDarkMode ? "#00FF00" : "#008000" },
            ]}
          >
            ATK: +{item.atk}
          </Text>
        )}
        {item.def && (
          <Text
            style={[
              styles.statText,
              { color: isDarkMode ? "#00FF00" : "#008000" },
            ]}
          >
            DEF: +{item.def}
          </Text>
        )}
        <Text
          style={[
            styles.goldText,
            { color: isDarkMode ? "#FFD700" : "#B8860B" },
          ]}
        >
          {item.cost ? `${item.cost} GOLD` : "PRICELESS"}
        </Text>
      </View>

      <Text
        style={[styles.locationText, { color: isDarkMode ? "#888" : "#666" }]}
      >
        LOC: {item.location}
      </Text>
    </View>
  );

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
        placeholder="SEARCH ITEMS..."
        placeholderTextColor={isDarkMode ? "#666" : "#999"}
        value={search}
        onChangeText={setSearch}
      />

      <View
        style={[
          styles.tabContainer,
          { borderBottomColor: isDarkMode ? "#333" : "#CCC" },
        ]}
      >
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(cat) => cat}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setFilter(item)}>
              <Text
                style={[
                  styles.tabText,
                  { color: isDarkMode ? "#666" : "#999" },
                  filter === item && { color: colors.text },
                ]}
              >
                {filter === item ? `▶${item}` : item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard item={item} />}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 45,
    borderWidth: 2,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
  tabContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  tabText: {
    fontFamily: "sans-serif-condensed",
    fontSize: 14,
    marginRight: 15,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 3,
    padding: 12,
    marginBottom: 12,
    borderRadius: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemName: {
    fontSize: 18,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
  itemType: {
    fontSize: 12,
    fontFamily: "sans-serif",
  },
  effectText: {
    fontFamily: "sans-serif",
    fontSize: 13,
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  statText: {
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginRight: 15,
  },
  goldText: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 10,
    fontStyle: "italic",
    fontFamily: "sans-serif",
  },
  listPadding: {
    paddingBottom: 30,
  },
});

export default ItemsScreen;
