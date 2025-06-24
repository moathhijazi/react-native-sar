import { View, Image , Dimensions } from "react-native";
import React from "react";
import WatchSkeleton from "../theme/skeleton/main/watch-skeleton";
import Header from "../ui/header";
import { Text } from "~/components/ui/text" 
export default function WatchRoute() {
   const screenWidth = Dimensions.get("window").width;
  return (
    <View>
      <Header title={"شاهد"} />
      <View>
        <Image
          style={{
            width: screenWidth,
            height: undefined,
            aspectRatio: 1,
          }}
          resizeMode="contain"
          source={require("../assets/pic/empty-one.png")}
        />
        <Text className="text-center text-gray-600">
          لا يوجد فيديوهات مقترحة
        </Text>
      </View>
    </View>
  );
}
