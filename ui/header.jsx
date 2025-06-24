import { View } from "react-native";
import React from "react";
import Logo from "./logo";
import { Text } from "~/components/ui/text";

export default function Header({title}) {
  return (
    <View className="w-full p-4 flex flex-row items-center justify-between border-b border-b-solid border-b-[#ccc]">
      <Logo />
      <Text className="text-xl">{title}</Text>
    </View>
  );
}
