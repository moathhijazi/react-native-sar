import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CategorySkeleton from '../theme/skeleton/main/category-skeleton'

export default function CategoryRoute() {
  return (
    <SafeAreaView>
      <CategorySkeleton />
    </SafeAreaView>
  )
}