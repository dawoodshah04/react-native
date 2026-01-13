import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        paddingHorizontal:8,
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    },
    container:{
        flex:1,
        flexDirection:'row-reverse'
    },
    card:{
        justifyContent:'center',
        color:'white',
        alignItems:'center',
        height:100,
        width:100,
        margin:8,
        borderRadius:8
    },
    cardOne:{
        backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'green'
    },
    cardThree:{
        backgroundColor:'blue'
    }
})