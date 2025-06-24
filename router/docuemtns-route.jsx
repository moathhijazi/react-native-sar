import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import DocumentsSkeleton from "../theme/skeleton/main/documents-skeleton"
export default function DocumentsRoute() {
  return (
    <SafeAreaView>
      <DocumentsSkeleton />
    </SafeAreaView>
  )
}