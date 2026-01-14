import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView >
        <FlatCards />
        <ElevatedCards/>
        <FancyCards/>
        <ContactList/>
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
  },

})