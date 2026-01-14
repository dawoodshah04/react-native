import { ScrollView, StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import React from 'react'

export default function ContactList() {
const contacts = [
        {
            uid: 1,
            name: 'Dawood Shah',
            status: 'React Native Developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
    
        {
            uid: 4,
            name: 'Emily Davis',
            status: 'Product Manager',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 5,
            name: 'Alex Kumar',
            status: 'DevOps Specialist',
            imageUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
        },
        {
            uid: 6,
            name: 'Lisa Wang',
            status: 'Backend Developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
        },
    ];
    const isDarkMode =  useColorScheme() === 'dark'
  return (
    <View>
      <Text style={[styles.headingText, {color: isDarkMode ? 'white' : 'black'}]}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={true} nestedScrollEnabled={true}> 
        
           {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={[styles.userCard, {borderRadius:10}]}>
                <Image source={{uri:imageUrl}} style={styles.imageUrl}/>
                <View style={styles.body}>
                    
                <Text style={[styles.userName, {color: isDarkMode ? 'white' : 'black'}]}>{name}</Text>
                <Text style={[styles.userStatus, {color: isDarkMode ? 'white' : 'black'}]}>{status}</Text>
                </View>
            </View>
           ))}
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    // textColor:{color:'white'},
    headingText:{
        fontWeight:'bold',
        paddingHorizontal:8,
        fontSize:24,
        paddingVertical:8
    },
    body:{
        flex:1,
        marginTop:8,
        marginLeft:8
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
        height: 250,
        borderRadius:9,
        backgroundColor:'black'
    },
    userStatus:{
        flex:1,
        flexDirection:'row'
    },
    userName:{
        fontSize:16,
        fontWeight:'bold'
    },
    imageUrl:{
        height:60,
        width:60,
        borderRadius: 40,
        marginBottom:14,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8854b9',
        borderRadius:6,
        paddingTop:10,
        paddingLeft:10,
        margin:10,
        
    }

})