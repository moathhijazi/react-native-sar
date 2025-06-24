import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FirstOpenProvider from "../ui/first-open/provider";
import BottomTabs from "./bottom-navigation";
import { visit } from "../api/api";

export default function MainScreen() {
  const [loading, setLoading] = useState(true);
  const [firstOpen, setOpen] = useState(undefined);

  useEffect(() => {
    const checkFirstOpen = async () => {
      visit();
      const openBefore = await AsyncStorage.getItem("first-open");
      if (!openBefore) {
        setOpen(false);
      } else {
        setOpen(true);
      }
      setLoading(false);
    };

    checkFirstOpen();
  }, []);

  if (loading) {
    return null; // or <ActivityIndicator /> if you want a spinner
  }

  if (firstOpen) {
    return <FirstOpenProvider final={setOpen} />;
  }
  // Bottom navigation

  return (
    
    <BottomTabs />
    
  );
}
