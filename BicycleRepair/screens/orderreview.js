import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NavButton from "../components/navbutton";
import Title from "../components/title";

export default function OrderReviewScreen({ order, subtotal, reset }) {
  if (!order) {
    return (
      <View style={styles.container}>
        <Text>Loading order details</Text>
      </View>
    );
  }

  const tax = (subtotal || 0) * 0.06;
  const total = (subtotal || 0) + tax;

  return (
    <LinearGradient colors={["#1e3c72", "#2a5298"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title text="Order Review" />

        <View style={styles.receipt}>
          {order.services?.map((service, index) => (
            <Text key={index} style={styles.itemText}>
              {service.name} - ${service.price.toFixed(2)}
            </Text>
          ))}

          <Text style={styles.itemText}>
            Service Time: ${order.serviceTimePrice?.toFixed(2) || "0.00"}
          </Text>

          {order.membership && (
            <Text style={styles.itemText}>Rental Membership - $100.00</Text>
          )}

          <View style={styles.divider} />

          <Text style={styles.pricing}>Subtotal: ${subtotal.toFixed(2)}</Text>
          <Text style={styles.pricing}>Tax (6%): ${tax.toFixed(2)}</Text>
          <Text style={[styles.pricing, styles.totalText]}>
            Total: ${total.toFixed(2)}
          </Text>
        </View>

        <NavButton title="Return Home" onPress={reset} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    justifyContent: "center",
    flexGrow: 1,
  },
  receipt: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  itemText: {
    fontFamily: "CustomFont-Regular",
    fontSize: 16,
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#266abd",
    marginVertical: 15,
  },
  pricing: {
    textAlign: "right",
    fontSize: 16,
    fontFamily: "CustomFont-Regular",
  },
  totalText: {
    fontFamily: "CustomFont-Regular",
    fontSize: 20,
    marginTop: 10,
    color: "#000000",
  },
});
