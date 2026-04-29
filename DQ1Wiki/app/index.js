import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { registerRootComponent } from "expo";

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

registerRootComponent(App);

export default function App() {
  return (
    <ThemeProvider>
      <MyTabs />
    </ThemeProvider>
  );
}
