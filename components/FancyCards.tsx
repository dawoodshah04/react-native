import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <View style={[styles.card, styles.elevatedCards]}>
        <Image
          source={{
            uri:'https://images.pexels.com/photos/16693762/pexels-photo-16693762.jpeg' }}style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Faisal Mosque, Islamabad </Text>
          <Text style={styles.cardLabel}> E-8, Islamabad</Text>
          <Text style={styles.cardDescription}>
            The Faisal Mosque is the national mosque of Pakistan, located in
            Islamabad, the capital of the country. It is the sixth-largest
            mosque in the world and located on the foothills of Margalla Hills.
          </Text>
          <Text style={styles.cardFooter}>20 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {},
  cardImage: {
    height: 180,
    width:'100%',
    marginBottom:4,
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
  },
  headingText: {
     paddingHorizontal:8,
     fontSize:24,
     fontWeight:'bold',
     color:'white'
  },
  card: {
    backgroundColor:'grey',
    marginHorizontal:12,
    marginVertical:16,
    borderRadius:4
  },
  elevatedCards: {
    elevation:2
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:4
  },
  cardTitle: {
    color: 'white',
    fontSize:18,
    fontWeight:'bold',
    marginBottom:2,
    textAlign:'center'
  },
  cardLabel: {
    color: 'white',
    fontSize:14,
    marginBottom:4,
    textAlign:'center'
  },
  cardDescription: {
    color: '#e6e6e6',
    fontSize:12,
    marginBottom:7,
    marginTop:5
  },
  cardFooter: {
    color: 'white',
    fontSize:14,
    marginLeft:240,
    marginBottom:4
  },
});
