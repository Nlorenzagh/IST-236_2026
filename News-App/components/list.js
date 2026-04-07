import { FlatList, StyleSheet, View } from "react-native";
import { NEWS_ITEMS } from "../data/duumy-data";
import ListItem from "./listitem";

function List({ category, navigation }) {
  const displayedNews = NEWS_ITEMS.filter((item) => item.category === category);

  function renderNewsItem(itemData) {
    const item = itemData.item;

    const pressHandler = () => {
      navigation.navigate("NewsDetail", { item: item });
    };

    return (
      <ListItem
        headline={item.headline}
        imageUrl={item.imageUrl}
        date={item.date}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedNews}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1649af",
  },
});

export default List;
