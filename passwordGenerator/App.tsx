import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(6, "Password Should be of min 6 chars")
    .max(16, "Password Should be of max 16 chars")
    .required("length is required")
});

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={{color: isDarkMode ? 'white' : 'black'}}>Password Generator</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  }
})