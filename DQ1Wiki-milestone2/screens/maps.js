import { useContext } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ThemeContext } from "../context/themecontext";
import { MAPS } from "../data/mapsdata";

const MapsScreen = () => {
  const { colors } = useContext(ThemeContext);
  const worldMap = MAPS[0];

  return (
    <View style={[styles.container, { backgroundColor: "#000" }]}>
      <View style={styles.commandWindow}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{worldMap.name.toUpperCase()}</Text>
        </View>

        <ScrollView
          maximumZoomScale={3}
          minimumZoomScale={1}
          contentContainerStyle={styles.scrollContainer}
        >
          <Image
            source={{ uri: worldMap.image }}
            style={styles.mapImage}
            resizeMode="contain"
          />
        </ScrollView>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          CHESTS: {worldMap.chests.join(", ").toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  commandWindow: {
    flex: 0.8,
    borderWidth: 4,
    borderColor: "#FFF",
    borderRadius: 4,
    backgroundColor: "#000",
    marginTop: 20,
    position: "relative",
    overflow: "hidden",
  },
  labelContainer: {
    position: "absolute",
    top: -15,
    left: 20,
    backgroundColor: "#000",
    paddingHorizontal: 10,
    zIndex: 10,
  },
  labelText: {
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: 18,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: Dimensions.get("window").width - 60,
    height: 400,
  },
  infoBox: {
    marginTop: 20,
    padding: 15,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  infoText: {
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: 14,
    textAlign: "center",
  },
});

export default MapsScreen;
