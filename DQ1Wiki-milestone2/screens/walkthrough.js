import { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../context/themecontext";
import { WALKTHROUGH } from "../data/walkthroughdata";

const WalkthroughScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [expandedId, setExpandedId] = useState(null);

  const toggleSection = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.header, { color: colors.accent }]}>QUEST GUIDE</Text>

      {WALKTHROUGH.map((step) => (
        <View
          key={step.id}
          style={[styles.stepContainer, { borderColor: colors.accent }]}
        >
          <TouchableOpacity
            onPress={() => toggleSection(step.id)}
            style={styles.stepHeader}
          >
            <Text style={[styles.stepTitle, { color: colors.accent }]}>
              {step.title}
            </Text>
            <Text style={{ color: colors.accent }}>
              {expandedId === step.id ? "▼" : "▶"}
            </Text>
          </TouchableOpacity>

          {expandedId === step.id && (
            <View style={styles.contentBody}>
              <Text style={[styles.contentText, { color: colors.text }]}>
                {step.content}
              </Text>
              <View style={[styles.tipBox, { backgroundColor: "#1a1a1a" }]}>
                <Text style={[styles.tipText, { color: colors.accent }]}>
                  PRO TIP: {step.tip}
                </Text>
              </View>
            </View>
          )}
        </View>
      ))}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  header: {
    fontFamily: "Courier",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  stepContainer: {
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 4,
    overflow: "hidden",
  },
  stepHeader: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 215, 0, 0.1)",
  },
  stepTitle: {
    fontFamily: "Courier",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentBody: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  contentText: {
    lineHeight: 22,
    fontSize: 15,
    marginBottom: 15,
  },
  tipBox: {
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#FFD700",
  },
  tipText: {
    fontFamily: "Courier",
    fontSize: 12,
    fontStyle: "italic",
  },
});

export default WalkthroughScreen;
