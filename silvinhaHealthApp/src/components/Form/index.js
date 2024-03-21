import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import ResultImc from './ResultImc'

export default function Form() {

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e a altura');
  const [textButton, setTextButton] = useState('Calcular IMC');

  function imcCalculator() {
    return setImc(
      (weight / (height ** 2)).toFixed(2)
    );
  }

  function validationImc() {
    if (height != null && weight != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é;");
      setTextButton("Calcular Novamente?")
      return;
    }
    setImc(null);
      setMessageImc("Preencha o peso e a altura");
      setTextButton("Calcular IMC")
    
    }
    return (
      <View style={styles.formContent}>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height ?? ''}
            keyboardType='numeric'
            placeholder='Ex. 1.70'
          />
          <Text style={styles.formLabel}>Peso</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight ?? ''}
            keyboardType='numeric'
            placeholder='Ex. 80.36'
          />
          <TouchableOpacity

            style={styles.button}

            onPress={() => validationImc()}>
            <Text style={styles.textButton}>
             {textButton}
            </Text>
          </TouchableOpacity>
        </View>
        <ResultImc
          messageResult={messageImc}
          resultImc={imc}
        />
      </View>
    )
  }