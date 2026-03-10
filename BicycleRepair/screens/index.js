import { useMemo, useState } from "react";

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import { Checkbox } from "expo-checkbox";
import RadioGroup from "react-native-radio-buttons-group";

import NavButton from "../components/navbutton";
import Title from "../components/title";

export default function HomeScreen({ onSubmit }) {
  const repairTimeRadioButtons = useMemo(
    () => [
      { id: "0", label: "Standard ($0)", price: 0 },
      { id: "1", label: "Expedited ($50)", price: 50 },
      { id: "2", label: "Next Day ($100)", price: 100 },
    ],
    [],
  );

  const [repairTimeId, setRepairTimeId] = useState("0");

  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  function toggleService(index) {
    const updated = [...services];
    updated[index].value = !updated[index].value;
    setServices(updated);
  }

  function submitHandler() {
    const selectedServices = services.filter((s) => s.value);

    const selectedTime =
      repairTimeRadioButtons.find((r) => r.id === repairTimeId)?.price || 0;

    const orderData = {
      serviceTime: selectedTime,
      services: selectedServices,
      newsletter,
      rental: rentalMembership,
    };

    onSubmit(orderData);
  }

  return (
    <ImageBackground
      source={require("../assets/images/bike.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Title text="Bicycle Repair Shop" />

          <Text style={styles.sectionTitle}>Service Time</Text>

          <RadioGroup
            radioButtons={repairTimeRadioButtons}
            onPress={setRepairTimeId}
            selectedId={repairTimeId}
            layout="column"
          />

          <Text style={styles.sectionTitle}>Service Options</Text>

          {services.map((service, index) => (
            <View key={service.id} style={styles.checkboxRow}>
              <Checkbox
                value={service.value}
                onValueChange={() => toggleService(index)}
              />
              <Text style={styles.checkboxText}>
                {service.name} (${service.price})
              </Text>
            </View>
          ))}

          <View style={styles.switchRow}>
            <Text style={{ color: "white" }}>Newsletter Signup</Text>
            <Switch value={newsletter} onValueChange={setNewsletter} />
          </View>

          <View style={styles.switchRow}>
            <Text style={{ color: "white" }}>Rental Membership ($100)</Text>
            <Switch
              value={rentalMembership}
              onValueChange={setRentalMembership}
            />
          </View>

          <NavButton title="Submit Order" onPress={submitHandler} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  container: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "white",
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  checkboxText: {
    marginLeft: 8,
    color: "white",
  },

  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
