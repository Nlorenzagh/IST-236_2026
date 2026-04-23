import { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { ThemeContext } from "../context/themecontext";
import { ITEMS } from "../data/itemandequipdata";

const ItemsScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  const filteredItems = ITEMS.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const ItemRow = ({ item }) => (
    <View style={[styles.itemRow, { borderBottomColor: colors.accent }]}>
      <View style={styles.mainInfo}>
        <Text style={[styles.itemName, { color: colors.text }]}>
          {item.name.toUpperCase()}
        </Text>
        <Text style={[styles.itemType, { color: colors.accent }]}>
          {item.type}
        </Text>
      </View>

      <View style={styles.details}>
        <Text style={{ color: colors.text, fontSize: 13 }}>
          {item.attack
            ? `ATK: ${item.attack}`
            : item.defense
              ? `DEF: ${item.defense}`
              : item.effect}
        </Text>
        <Text style={{ color: "#888", fontSize: 12 }}>Cost: {item.cost} G</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[
          styles.searchBar,
          { color: colors.text, borderColor: colors.accent },
        ]}
        placeholder="Search Items/Equipment..."
        placeholderTextColor="#666"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemRow item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  searchBar: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontFamily: "Courier",
  },
  itemRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Courier",
  },
  itemType: {
    fontSize: 10,
    letterSpacing: 1,
  },
  mainInfo: { flex: 1 },
  details: { alignItems: "flex-end", flex: 1 },
});

export default ItemsScreen;
