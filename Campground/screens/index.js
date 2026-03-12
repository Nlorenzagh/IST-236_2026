import { useState } from "react";
import {
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import ReserveButton from "../components/custombutton";
import Title from "../components/customtitle";

export default function HomeScreen() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [guests, setGuests] = useState(1);
  const [campsites, setCampsites] = useState(1);
  const [guestModalVisible, setGuestModalVisible] = useState(false);
  const [campModalVisible, setCampModalVisible] = useState(false);
  const [reservation, setReservation] = useState(null);

  function reserveHandler() {
    setReservation({
      checkIn,
      checkOut,
      guests,
      campsites,
    });
  }

  return (
    <ImageBackground
      source={require("../assets/images/home_background.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Title>Evergreen Campground</Title>
          <Pressable onPress={() => setShowCheckIn(true)}>
            <Text style={styles.text}>
              Check In: {checkIn.toLocaleString()}
            </Text>
          </Pressable>

          {showCheckIn && (
            <DateTimePicker
              value={checkIn}
              mode="datetime"
              display="default"
              onChange={(event, selectedDate) => {
                setShowCheckIn(false);
                if (selectedDate) setCheckIn(selectedDate);
              }}
            />
          )}

          <Pressable onPress={() => setShowCheckOut(true)}>
            <Text style={styles.text}>
              Check Out: {checkOut.toLocaleString()}
            </Text>
          </Pressable>

          {showCheckOut && (
            <DateTimePicker
              value={checkOut}
              mode="datetime"
              display="default"
              onChange={(event, selectedDate) => {
                setShowCheckOut(false);
                if (selectedDate) setCheckOut(selectedDate);
              }}
            />
          )}

          <Pressable onPress={() => setGuestModalVisible(true)}>
            <Text style={styles.text}>Guests: {guests}</Text>
          </Pressable>

          <Pressable onPress={() => setCampModalVisible(true)}>
            <Text style={styles.text}>Campsites: {campsites}</Text>
          </Pressable>

          <ReserveButton onPress={reserveHandler} />

          {reservation && (
            <View style={styles.resultBox}>
              <Text style={styles.resultText}>
                Check In: {reservation.checkIn.toLocaleString()}
              </Text>
              <Text style={styles.resultText}>
                Check Out: {reservation.checkOut.toLocaleString()}
              </Text>
              <Text style={styles.resultText}>
                Guests: {reservation.guests}
              </Text>
              <Text style={styles.resultText}>
                Campsites: {reservation.campsites}
              </Text>
            </View>
          )}
        </ScrollView>

        <Modal visible={guestModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Picker
                selectedValue={guests}
                onValueChange={(itemValue) => setGuests(itemValue)}
              >
                {[...Array(15)].map((_, i) => (
                  <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
                ))}
              </Picker>

              <Pressable
                style={styles.modalButton}
                onPress={() => setGuestModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal visible={campModalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Picker
                selectedValue={campsites}
                onValueChange={(itemValue) => setCampsites(itemValue)}
              >
                {[...Array(5)].map((_, i) => (
                  <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
                ))}
              </Picker>

              <Pressable
                style={styles.modalButton}
                onPress={() => setCampModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    backgroundColor: "rgba(0,0,0,0.55)",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  container: {
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 18,
    marginVertical: 10,
  },

  resultBox: {
    marginTop: 20,
    backgroundColor: "rgba(22, 144, 50, 0.85)",
    padding: 15,
    borderRadius: 10,
  },

  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  modalBox: {
    backgroundColor: "black",
    width: "80%",
    borderRadius: 10,
    padding: 20,
  },

  modalButton: {
    backgroundColor: "#2f855a",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});
