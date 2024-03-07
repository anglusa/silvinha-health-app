import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTittle}>Silvinha Health App</Text>
    </View>
  )
}