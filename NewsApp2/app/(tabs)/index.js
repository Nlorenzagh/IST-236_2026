import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BookmarkedScreen from "../../screens/Bookmark";
import NewsDetailScreen from "../../screens/Newsdetail";
import TechNewsScreen from "../../screens/TechNews";
import USNewsScreen from "../../screens/USNews";
import WorldNewsScreen from "../../screens/WorldNews";
import BookmarksContextProvider from "../../store/context/bookmarks-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="US"
        component={USNewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="World"
        component={WorldNewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="globe" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tech"
        component={TechNewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="laptop" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="News Categories" component={TabNavigator} />
      <Drawer.Screen name="Bookmarks" component={BookmarkedScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "open-sans": require("../assets/fonts/Montserrat-wght.ttf"),
        });
      } catch (e) {
        console.warn("Font loading error:", e);
      } finally {
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, []);

  if (!fontLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BookmarksContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={{ title: "Article" }}
          />
        </Stack.Navigator>
      </BookmarksContextProvider>
    </GestureHandlerRootView>
  );
}
