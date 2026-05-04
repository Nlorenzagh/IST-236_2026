import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { registerRootComponent } from "expo";
import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemeProvider } from "../context/themecontext";
import BestiaryScreen from "../screens/bestiary";
import HomeScreen from "../screens/home";
import ItemsScreen from "../screens/itemsequipmemt";
import MapsScreen from "../screens/maps";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: {
          color: "#ffffff",
          fontWeight: "bold",
          fontFamily: "Courier",
        },
        tabBarStyle: { backgroundColor: "#000", borderTopWidth: 0 },
        tabBarActiveTintColor: "#073fe8",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: { fontFamily: "Courier", fontSize: 10 },
        headerShown: true,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bestiary" component={BestiaryScreen} />
      <Tab.Screen name="Items" component={ItemsScreen} />
      <Tab.Screen name="Maps" component={MapsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isMuted, setIsMuted] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    async function setupAudio() {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
        });

        const { sound } = await Audio.Sound.createAsync(
          require("../assets/audio/dqmusic.mp3"),
          { shouldPlay: true, isLooping: true, volume: 0.2 },
        );

        soundRef.current = sound;
      } catch (error) {
        console.log("Audio load error:", error);
      }
    }

    setupAudio();

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const toggleMute = async () => {
    if (soundRef.current) {
      const newMuteStatus = !isMuted;
      await soundRef.current.setIsMutedAsync(newMuteStatus);
      setIsMuted(newMuteStatus);
    }
  };

  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <MyTabs />

        <SafeAreaView style={styles.muteContainer}>
          <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
            <Text style={styles.muteText}>{isMuted ? "Unmute" : "Mute"}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  muteContainer: {
    position: "absolute",
    top: 45,
    right: 20,
    zIndex: 999,
  },
  muteButton: {
    backgroundColor: "rgb(255, 250, 250)",
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  muteText: {
    fontSize: 18,
  },
});

registerRootComponent(App);
