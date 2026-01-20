import { ScrollView, StyleSheet, Text, TextInput, TextInputBase, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';

const PasswordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(6, "Password Should be of min 6 chars")
    .max(16, "Password Should be of max 16 chars")
    .required("length is required")
});

export default function App() {

  const [password, setPassword] = useState('')
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)

  const generatePasswordString = (passwordLenght: number) => {

    let charList = ''
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const specialChars = '!@#$%^&*()?<>+_'
    const digitChars = '0123456789'

    if (lowerCase) {
      charList += lowerCaseChars
    }

    if (upperCase) {
      charList += upperCaseChars
    }

    if (numbers) {
      charList += digitChars
    }

    if (symbols) {
      charList += specialChars
    }

    const password = createPassword(charList, passwordLenght)
    setIsPasswordGenerated(true)

  }

  const createPassword = (chars: string, passwordLenght: number) => {
    let result = ''
    for (let index = 0; index < passwordLenght; index++) {
      const charIndex = Math.floor(Math.random() * chars.length)
      result += chars.charAt(index)

    }
    console.log('Password Created!')
    return result
  }

  const resetPassword = () => {
    setPassword('')
    setIsPasswordGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)

  }

  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLenght: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePasswordString(+values.passwordLenght)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleReset,
              isValid
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Lenght</Text>
                    {touched.passwordLenght && errors.passwordLenght && (<Text style={styles.errorText}>
                      {errors.passwordLenght}
                    </Text>)}
                    
                  </View>
                  <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLenght}
                      onChangeText={handleChange('passwordLenght')}
                      placeholder='Ex. 8'
                      keyboardType='numeric'
                    ></TextInput>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>
                    Include Lowercase Letters
                  </Text>
                  <BouncyCheckbox 
                    isChecked={lowerCase}
                    onPress={()=>setLowerCase(!lowerCase)}
                    fillColor='#19d612e5'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>
                    Include UpperCase Lettters
                  </Text>
                  <BouncyCheckbox 
                    isChecked={upperCase}
                    onPress={()=>setUpperCase(!upperCase)}
                    fillColor='#126dd6e5'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>
                    Include Numbers
                  </Text>
                  <BouncyCheckbox 
                    isChecked={numbers}
                    onPress={()=>setNumbers(!numbers)}
                    fillColor='#d61212e5'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>
                    Include Special Chars
                  </Text>
                  <BouncyCheckbox 
                    isChecked={symbols}
                    onPress={()=>setSymbols(!symbols)}
                    fillColor='#8e12d6e5'
                  />
                </View>

                <View style={styles.formActions}>
                  
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.primaryBtnTxt}>
                    Generate Password
                  </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={()=>{
                      handleReset()
                      resetPassword()
                    }}
                  >
                    <Text style={styles.secondaryBtnTxt}>
                      Reset
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
            {
              isPasswordGenerated ? (
                <View style={[styles.card, styles.cardElevated]}>
                  <Text style={styles.subTitle}>Result</Text>
                  <Text style={styles.description}>Long Press to Copy</Text>
                  <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
                </View>
              ) : null
            }
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },
})