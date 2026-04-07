import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

function NewsDetailScreen({ route, navigation }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const item = route.params.item;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => setIsBookmarked(!isBookmarked)}>
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={24}
            color="black"
          />
        </Pressable>
      ),
    });
  }, [navigation, isBookmarked]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.headline}>{item.headline}</Text>
        <Text style={styles.meta}>
          {item.date} | {item.author} ({item.agency})
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  image: { width: "100%", height: 250 },
  content: { padding: 20 },
  headline: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  meta: { fontSize: 14, color: "#086387", marginBottom: 20 },
  description: { fontSize: 16, lineHeight: 24 },
});

export default NewsDetailScreen;
