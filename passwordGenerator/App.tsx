import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number() 
    .min(6, "Password should be min 6 characters")
    .max(16, "Password should be max 16 characters")
    .required("Length is required")
});

export default function App() {

  const [password, setPassword] = useState('')
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
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

    const passwordResult = createPassword(charList, passwordLength)
    setPassword(passwordResult)
    setIsPasswordGenerated(true)
  }

  const createPassword = (chars: string, passwordLength: number) => {
    let result = ''
    for (let index = 0; index < passwordLength; index++) {
      const charIndex = Math.floor(Math.random() * chars.length)
      result += chars.charAt(charIndex)
    }
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

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={[styles.appContainer, ]}>
        <View style={styles.formContainer}>
          <Text style={[styles.title]}>Password Generator</Text>
          
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePasswordString(Number(values.passwordLength))
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
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='Ex. 8'
                    keyboardType='numeric'
                    placeholderTextColor="#999"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <View style={styles.checkboxContainer}>
                    <BouncyCheckbox 
                      useBuiltInState={false}
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                      fillColor='#29AB87'
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <View style={styles.checkboxContainer}>
                    <BouncyCheckbox 
                      useBuiltInState={false}
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor='#FED85D'
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <View style={styles.checkboxContainer}>
                    <BouncyCheckbox 
                      useBuiltInState={false}
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor='#C9A0DC'
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <View style={styles.checkboxContainer}>
                    <BouncyCheckbox 
                      useBuiltInState={false}
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor='#FC80A5'
                    />
                  </View>
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={[styles.primaryBtn, !isValid && styles.primaryBtnDisabled]}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.primaryBtnTxt}>
                      Generate
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
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

          {isPasswordGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Generated Password</Text>
              <Text style={styles.description}>Long press to copy</Text>
              <Text selectable={true} style={styles.generatedPassword}>
                {password}
              </Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
 txt:{
  color:'white'
 },bg:{
  backgroundColor:'black'
 }, appContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    margin: 8,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1a1a1a',
  },
  description: {
    color: '#758283',
    marginBottom: 12,
    fontSize: 14,
  },
  heading: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  inputWrapper: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
    flex: 1,
  },
  inputStyle: {
    padding: 10,
    width: '30%',
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: '#5DA3FA',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
    marginTop: 4,
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 12,
  },
  primaryBtn: {
    width: 130,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#5DA3FA',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  primaryBtnDisabled: {
    backgroundColor: '#ccc',
    elevation: 0,
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryBtn: {
    width: 130,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#CAD5E2',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#1a1a1a',
  },
  card: {
    padding: 20,
    borderRadius: 12,
    marginTop: 24,
    marginHorizontal: 4,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  generatedPassword: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 12,
    color: '#5DA3FA',
    fontWeight: '700',
    letterSpacing: 2,
    padding: 12,
    backgroundColor: '#f0f7ff',
    borderRadius: 8,
  },
  checkboxContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 50,
  },
})