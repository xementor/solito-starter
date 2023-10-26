import React, { ReactNode } from 'react'
import { View } from 'react-native'

function Body({ children }: { children: ReactNode }) {
  return (
    <View className="bg-surface-100 dark:bg-surfacedark-100 loaded-success font-sans text-base font-normal text-gray-700 dark:text-gray-200">
      {children}
    </View>
  )
}

export default Body
