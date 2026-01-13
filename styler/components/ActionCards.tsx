import { Alert, Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ActionCards() {

    const openWebsite = async (websiteLink: string) => {
    
        const supported = await Linking.canOpenURL(websiteLink)

        try {
            if(supported){
                await Linking.openURL(websiteLink)
            }else{
                Alert.alert('Error!',`Cannot Open this URL: ${websiteLink}`)
            }
        // await Linking.openSettings()
        } catch (error) {
            Alert.alert('Error', 'Failed to open the URL. Please try again later.');
            console.error('Error opening URL:', error);
          }
        
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.card}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Interesting Facts About Earth</Text>
        </View>
        <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1712039658659-7019cfe912e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFydGh8ZW58MHx8MHx8fDA%3D' }} style={styles.cardImage} />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta
            accusantium hic iure magnam est distinctio sit facilis
            reprehenderit, ratione nulla nobis omnis porro nihil ipsa dolorem,
            culpa odit minus.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> openWebsite('https://science.nasa.gov/earth/facts/')}>
            <Text style={styles.headerText}>Read more...</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> openWebsite('slack://open?team=123456/')}>
            <Text style={styles.headerText}>Broken Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{color:'white'},
    headingContainer:{},
    card:{},
    headerText:{color:'white',
        marginBottom:4
    },
    cardImage:{
        height:180
    },
    bodyContainer:{
        
    },
    bodyText:{color:'white'},
    footerContainer:{}
    
});
