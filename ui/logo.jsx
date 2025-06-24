import { View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
export default function Logo() {
  return (
    <View className="flex flex-row items-center">
      <View className="w-[55px] h-[55px] flex justify-center items-center border border-solid border-[#ccc] rounded-full">
        <Text type="en-three" className="text-1xl">
          SAR
        </Text>
      </View>
      <View className="ml-5">
        <Text type="en-three" className="text-xl text-[#f59e0b]">
          Rescuer{" "}
          <Text type="en-one" className="text-black">
            app
          </Text>
        </Text>
        <Text type="en-one">Search And Rescue</Text>
      </View>
    </View>
  );
}
