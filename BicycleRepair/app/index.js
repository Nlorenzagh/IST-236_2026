import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import HomeScreen from "../screens/index";
import ReviewScreen from "../screens/orderreview";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("home");
  const [orderData, setOrderData] = useState({
    serviceTime: 0,
    services: [],
    newsletter: false,
    rental: false,
  });
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "CustomFont-Regular": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const submitOrder = (data) => {
    let currentSubtotal = 0;
    currentSubtotal += data.serviceTime || 0;

    data.services.forEach((item) => {
      currentSubtotal += item.price;
    });

    if (data.rental) currentSubtotal += 100;

    setSubtotal(currentSubtotal);
    setOrderData(data);
    setCurrentScreen("review");
  };

  const resetOrder = () => {
    setOrderData({
      serviceTime: 0,
      services: [],
      newsletter: false,
      rental: false,
    });
    setSubtotal(0);
    setCurrentScreen("home");
  };

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {currentScreen === "home" ? (
        <HomeScreen onSubmit={submitOrder} />
      ) : (
        <ReviewScreen
          order={orderData}
          subtotal={subtotal}
          reset={resetOrder}
        />
      )}
    </View>
  );
}
