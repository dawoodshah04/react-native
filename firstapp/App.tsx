
import { ActivityIndicator, Button, ScrollViewComponent, StatusBar, StyleSheet, TextInput, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Text } from 'react-native';
import Cat from './android/components/Cat.tsx';
import Test from './android/components/Test.tsx';
import { useState } from 'react';




function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')


  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={{
          color: 'white', backgroundColor: 'gray', textAlign: 'center', margin: 10,
          padding: 2, flexShrink: 1
        }}>Welcome to My App</Text>
        
        <View style={{ alignItems: 'center', marginTop: 29, borderBlockColor: 'gray' }}>
          <TextInput placeholder='Enter your name' 
          style={{  color: 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    width: 250,
                    padding: 8,
                    marginTop: 10,
                    marginBottom:20
                  }}
          value={name}
          onChangeText={setName}
          ></TextInput>
          <Cat name={name} />
        </View>
        {/* <View style={{flex:1}}/> */}
        <View style={{marginTop:450, alignItems:'center',
        }}>
          <Button onPress={() => setShow(true)} title='Learn More' color={'#841584'}
          />
          {show && <ActivityIndicator size={'large'} color={'green'}
            style={{ padding: 40 }}
          />}
        </View>

      </View>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default App;
