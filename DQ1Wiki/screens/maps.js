import { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../context/themecontext";
import { MAPS } from "../data/mapsdata";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const MapsScreen = () => {
  const { colors, isDarkMode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState(0);
  const currentMap = MAPS[activeTab];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
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
            MAP SELECTION
          </Text>
        </View>

        <View
          style={[styles.tabContainer, { borderBottomColor: colors.border }]}
        >
          {MAPS.map((map, index) => (
            <TouchableOpacity
              key={map.id}
              onPress={() => setActiveTab(index)}
              style={styles.tabButton}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: isDarkMode ? "#666" : "#999" },
                  activeTab === index && { color: colors.text },
                ]}
              >
                {activeTab === index ? `▶ ${map.name}` : map.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView
          key={currentMap.id}
          minimumZoomScale={1}
          maximumZoomScale={3}
          centerContent={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={{ uri: currentMap.image }}
            style={styles.mapImage}
            resizeMode="contain"
          />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Text
          style={[styles.hintText, { color: isDarkMode ? "#444" : "#999" }]}
        >
          {isDarkMode ? " PINCH TO ZOOM " : " PINCH TO ZOOM "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  commandWindow: {
    flex: 0.9,
    borderWidth: 4,
    borderRadius: 4,
    marginTop: 35,
    padding: 10,
    position: "relative",
  },
  labelContainer: {
    position: "absolute",
    top: -16,
    left: 20,
    paddingHorizontal: 10,
    zIndex: 10,
  },
  labelText: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 10,
  },
  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  tabText: {
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeight: "bold",
  },
  mapImage: {
    width: SCREEN_WIDTH - 80,
    height: SCREEN_HEIGHT * 0.5,
  },
  footer: {
    marginTop: 15,
    alignItems: "center",
  },
  hintText: {
    fontFamily: "sans-serif",
    fontSize: 11,
    letterSpacing: 1,
  },
});

export default MapsScreen;
