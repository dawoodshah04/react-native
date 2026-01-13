import React from 'react'
import { Image, StyleProp, Text, View } from 'react-native'

type Catprops = {
  name:string
 
}

const Cat = (props:Catprops) => {

//   const displayImage = () => {
//     if(props.name==='beluga'){
//      return( 
//      <Image  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFDQZkWjsi2fMTKxu_BriIV4FonU1NcGP4w&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKo--pojGf9DOouEsdTRs0uA2hGeUO_X3TQ&s'
      
//      }}  style={{ width: 200, height: 200,  marginTop:30}}/>
     
//      );
//     }else{
//         return <Text style={{color:'white'}}>Your are Fool 🤣🤣</Text>
//     }
// }


  return (
    <View >
         <Text style={{color:'white', marginTop:20, textAlign:'center'}}>Hi I'm {  props.name}</Text>
        

        {props.name.length > 0 && (  props.name.toLowerCase() === 'beluga' ? (
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKo--pojGf9DOouEsdTRs0uA2hGeUO_X3TQ&s' }}
            style={{ width: 200, height: 200 , marginTop:30}}
          />
        ) : (
          <Text style={{ fontSize: 15 , color:'white', marginTop:30       
          }}>You are Fool 🤣🤣</Text>
        )
      )}
    </View>
  )
}

export default Cat