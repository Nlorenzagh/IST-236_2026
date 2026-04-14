import { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { NEWS_ITEMS } from "../data/duumy-data";
import { BookmarksContext } from "../store/context/bookmarks-context";

function BookmarkedScreen({ navigation }) {
  const bookmarkCtx = useContext(BookmarksContext);

  const displayedItems = NEWS_ITEMS.filter((item) =>
    bookmarkCtx.ids.includes(item.id),
  );

  if (displayedItems.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no bookmarked articles yet.</Text>
      </View>
    );
  }

  function renderBookmarkItem(itemData) {
    const item = itemData.item;

    function pressHandler() {
      navigation.navigate("NewsDetail", {
        item: item,
      });
    }

    return (
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => [
          styles.itemContainer,
          pressed && { opacity: 0.7 },
        ]}
      >
        <Text style={styles.itemText}>{item.headline}</Text>
        <Text style={styles.itemSubtext}>Read More →</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedItems}
        keyExtractor={(item) => item.id}
        renderItem={renderBookmarkItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
  container: { flex: 1, padding: 16 },
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#4496d0",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#48edef93",
  },
  itemText: { fontSize: 16, fontWeight: "600" },
  itemSubtext: { fontSize: 12, color: "#086387", marginTop: 5 },
});

export default BookmarkedScreen;
