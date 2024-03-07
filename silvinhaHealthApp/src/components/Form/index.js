import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import ResultImc from './ResultImc'

export default function Form() {
  return (
    <View style={styles.formContent}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Ex. 1.70'
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Ex. 80.360'
        />
        <TouchableOpacity

          style={styles.button}

          onPress={

            () => alert("o botao foi pressionado!!!")
          }>
          <Text style={styles.textButton}>
            Calcular IMC
          </Text>
        </TouchableOpacity>
      </View>
      <ResultImc />
    </View>
  )
}