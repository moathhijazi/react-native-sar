import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";

export default function FullScreenLoading() {
  const nav = useNavigation()
  // useLayoutEffect(() => {
  //   nav.setOptions({
  //     headerShown : false
  //   })
  // } , [])
  return (
    <View className="w-full h-screen bg-white flex flex-row justify-center items-center">
      <ActivityIndicator />
    </View>
  );
}
