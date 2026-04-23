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
import { MONSTERS } from "../data/monstersdata";

const BestiaryScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  const filteredMonsters = MONSTERS.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase()),
  );

  const MonsterItem = ({ item }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.accent },
      ]}
    >
      <View style={styles.infoContainer}>
        <Text style={[styles.monsterName, { color: colors.accent }]}>
          {item.name.toUpperCase()}
        </Text>
        <Text style={{ color: colors.text }}>
          HP: {item.hp} | GOLD: {item.gold} | EXP: {item.exp}
        </Text>
        <Text style={{ color: "#888", fontSize: 12 }}>
          Location: {item.location}
        </Text>
      </View>
      <TouchableOpacity style={styles.bookmarkBtn}>
        <Text style={{ color: colors.accent }}></Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[
          styles.searchBar,
          { color: colors.text, borderColor: colors.accent },
        ]}
        placeholder="Search Monsters..."
        placeholderTextColor="#666"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredMonsters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MonsterItem item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchBar: {
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: "Courier",
  },
  card: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  monsterName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bookmarkBtn: {
    padding: 10,
  },
});

export default BestiaryScreen;
