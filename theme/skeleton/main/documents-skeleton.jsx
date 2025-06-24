import { View, Text } from "react-native";
import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

export default function DocumentsSkeleton() {
  return (
    <View>
      <View className="p-4 mb-16 flex flex-row w-full items-center">
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


      <View className="p-4 flex flex-row w-full items-center">
        <Skeleton
          backgroundColor="#ccc"
          className="w-[100px] h-[100px] rounded-full"
        />
        <View className="ml-4 w-full">
          <Skeleton
            backgroundColor="#ccc"
            className="w-[220px] h-[25px] rounded-full"
          />
          <View className="w-[60%] flex flex-row items-center justify-between mt-4">
            <Skeleton
            backgroundColor="#ccc"
            className="w-[100px] h-[20px] rounded-full mt-1"
          />
            <Skeleton
            backgroundColor="#ccc"
            className="w-[40px] h-[20px] rounded-full mt-1"
          />
            <Skeleton
            backgroundColor="#ccc"
            className="w-[40px] h-[20px] rounded-full mt-1"
          />
           
       
          </View>
        </View>
      </View>
      <View className="p-4 flex flex-row w-full items-center">
        <Skeleton
          backgroundColor="#ccc"
          className="w-[100px] h-[100px] rounded-full"
        />
        <View className="ml-4 w-full">
          <Skeleton
            backgroundColor="#ccc"
            className="w-[220px] h-[25px] rounded-full"
          />
          <View className="w-[60%] flex flex-row items-center justify-between mt-4">
            <Skeleton
            backgroundColor="#ccc"
            className="w-[100px] h-[20px] rounded-full mt-1"
          />
            <Skeleton
            backgroundColor="#ccc"
            className="w-[40px] h-[20px] rounded-full mt-1"
          />
            <Skeleton
            backgroundColor="#ccc"
            className="w-[40px] h-[20px] rounded-full mt-1"
          />
           
       
          </View>
        </View>
      </View>
      <View className="p-4 flex flex-row w-full items-center">
        <Skeleton
          backgroundColor="#ccc"
          className="w-[100px] h-[100px] rounded-full"
        />
        <View className="ml-4 w-full">
          <Skeleton
            backgroundColor="#ccc"
            className="w-[220px] h-[25px] rounded-full"
          />
          <View className="w-[60%] flex flex-row items-center justify-between mt-4">
            <Skeleton
            backgroundColor="#ccc"
            className="w-[100px] h-[20px] rounded-full mt-1"
          />
            <Skeleton
            backgroundColor="#ccc"
            className="w-[40px] h-[20px] rounded-full mt-1"
          />
            <Skeleton
            backgroundColor="#ccc"
            className="w-[40px] h-[20px] rounded-full mt-1"
          />
           
       
          </View>
        </View>
      </View>
      <View className="p-4 flex flex-row w-full items-center">
        <Skeleton
          backgroundColor="#ccc"
          className="w-[100px] h-[100px] rounded-full"
        />
        <View className="ml-4 w-full">
          <Skeleton
            backgroundColor="#ccc"
            className="w-[220px] h-[25px] rounded-full"
          />
          <View className="w-[60%] flex flex-row items-center justify-between mt-4">
            <Skeleton
            backgroundColor="#ccc"
            className="w-[100px] h-[20px] rounded-full mt-1"
          />
            <Skeleton
            backgroundColor="#ccc"
            className="w-[40px] h-[20px] rounded-full mt-1"
          />
            <Skeleton
            backgroundColor="#ccc"
            className="w-[40px] h-[20px] rounded-full mt-1"
          />
           
       
          </View>
        </View>
      </View>
      

    </View>
  );
}
