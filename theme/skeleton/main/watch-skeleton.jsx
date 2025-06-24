import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from '~/components/ui/skeleton';

export default function WatchSkeleton() {
  return (
    <View>
      <View className="p-4 flex flex-row w-full items-center">
        <Skeleton backgroundColor="#ccc" className="w-[50px] h-[50px] rounded-full" />
        <View className="ml-4">
          <Skeleton backgroundColor="#ccc" className="w-[130px] h-[20px] rounded-full" />
          <Skeleton backgroundColor="#ccc" className="w-[100px] h-[20px] rounded-full mt-1" />
        </View>
      </View>
      <View className="p-4 mt-4">
        <Skeleton backgroundColor="#ccc" className="w-full h-[200px] rounded-xl" />
      </View>
      <View className="p-4 flex flex-row w-full items-center">
        <Skeleton backgroundColor="#ccc" className="w-[50px] h-[50px] rounded-full" />
        <View className="ml-4">
          <Skeleton backgroundColor="#ccc" className="w-[240px] h-[20px] rounded-full" />
          <Skeleton backgroundColor="#ccc" className="w-[100px] h-[20px] rounded-full mt-1" />
        </View>
      </View>
      <View className="p-4 mt-4">
        <Skeleton backgroundColor="#ccc" className="w-full h-[200px] rounded-xl" />
      </View>
      
    </View>
  )
}