import { View, Text } from "react-native";
import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

export default function CategorySkeleton() {
  return (
    <View>
      <View className="p-4 flex flex-row w-full items-center">
        <Skeleton
          backgroundColor="#ccc"
          className="w-[50px] h-[50px] rounded-full"
        />
        <View className="ml-4">
          <Skeleton
            backgroundColor="#ccc"
            className="w-[130px] h-[20px] rounded-full"
          />
          <Skeleton
            backgroundColor="#ccc"
            className="w-[100px] h-[20px] rounded-full mt-1"
          />
        </View>
      </View>

      <View className="p-4 mt-16 w-full flex flex-row flex-wrap justify-between">
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl"
        />
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl"
        />
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl"
        />
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl mt-6"
        />
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl mt-6"
        />
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl mt-6"
        />
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl mt-6"
        />
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl mt-6"
        />
        <Skeleton
          backgroundColor="#ccc"
          className="w-[30%] h-[110px] rounded-xl mt-6"
        />
      </View>
      <Skeleton
          backgroundColor="#ccc"
          className="w-[92%] h-[60px]  rounded-xl mt-10 mx-4"
        />
    </View>
  );
}
