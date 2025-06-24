import { View, SafeAreaView } from "react-native";
import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

export default function VideoIndieSkeleton() {
  return (
    <SafeAreaView className="flex-1 px-4 pt-20 bg-white">
      {/* First Video Skeleton */}
      <View className="mb-8">
        <Skeleton
          backgroundColor="#ccc"
          className="w-full rounded-lg"
          style={{ aspectRatio: 16 / 9 }}
        />
        <View className="flex-row justify-between items-center mt-4 px-2">
          <Skeleton
            backgroundColor="#ccc"
            className="w-[55px] h-[55px] rounded-full"
          />
          <View className="flex-1 ml-4">
            <Skeleton
              backgroundColor="#ccc"
              className="w-[150px] h-4 rounded-lg mb-2"
            />
            <Skeleton
              backgroundColor="#ccc"
              className="w-[80px] h-4 rounded-lg"
            />
          </View>
        </View>
      </View>

      {/* Second Video Skeleton */}
      <View>
        <Skeleton
          backgroundColor="#ccc"
          className="w-full rounded-lg"
          style={{ aspectRatio: 16 / 9 }}
        />
        <View className="flex-row justify-between items-center mt-4 px-2">
          <Skeleton
            backgroundColor="#ccc"
            className="w-[55px] h-[55px] rounded-full"
          />
          <View className="flex-1 ml-4">
            <Skeleton
              backgroundColor="#ccc"
              className="w-[150px] h-4 rounded-lg mb-2"
            />
            <Skeleton
              backgroundColor="#ccc"
              className="w-[80px] h-4 rounded-lg"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
