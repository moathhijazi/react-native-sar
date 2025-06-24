import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import FullScreenLoading from "../ui/full-screen-loading";
import { useFonts } from "expo-font";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { useToast } from "../global/context/toast-message-context";
import MainScreen from "../main/main-screen";

export default function index() {
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  const [fontsLoaded] = useFonts({
    "ar-one": require("../assets/fonts/ar/ar-one.ttf"),
    "ar-two": require("../assets/fonts/ar/ar-two.ttf"),
    "ar-three": require("../assets/fonts/ar/ar-three.ttf"),
    "en-one": require("../assets/fonts/en/en-one.ttf"),
    "en-two": require("../assets/fonts/en/en-two.ttf"),
    "en-three": require("../assets/fonts/en/en-three.ttf"),
  });

  useEffect(() => {
    const getMainData = async () => {
      setLoading(false);
      showToast({
        type: "success",
        text1: "TODO :: Fetch data from server",
        text2: "Todo fetch main data from server",
      });
    };
    getMainData();
  }, []);

  if (!fontsLoaded) {
    return <FullScreenLoading />; // or use <AppLoading /> if you want a splash/loading screen
  }

  if (loading) {
    return <FullScreenLoading />; // or use <AppLoading /> if you want a splash/loading screen
  }
  return (
    
      <MainScreen />
    
  );
}
