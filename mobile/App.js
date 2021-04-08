import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Dimensions, Button} from 'react-native';
import Main from './src/main'


const dimensions = Dimensions.get('window')

export default function LoginScreen(props) {
  const [serverID, setServerID] = useState('');
  const [ready, setReady] = useState(false);

  const startStreem = () =>{
    if(serverID != '')
    {
      setReady(true);
    }else{
      setReady(false)
    }
  }
  return (
   
    <View style={styles.root}>
       {ready 
        ? 
        <Main serverID={serverID}/>
        :
        <View style={styles.rootTwo}>
          <View style={styles.content}>
            <Text style={styles.heading}>Enter Server Link</Text>
            <TextInput style={styles.input} onChangeText={(e) => setServerID(e)} autoCapitalize={'none'} autoCorrect={false}/>
            <Button title={'submit'} onPress={startStreem} disabled={serverID != '' ? false : true}/>
          </View>
        </View>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootTwo: {
    backgroundColor: '#ffebaf',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    // alignSelf: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    marginBottom: 10,
    fontWeight: '900',
  },
  input: {
    height: 60,
    marginBottom: 10,
    backgroundColor: '#fff',
    padding:10,
    width: dimensions.width - 30,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    borderRadius: 10
  },
  btn: {
    height: 60,
    alignItems: 'stretch',
    justifyContent: 'center',
    fontSize: 18,
  },
  btnContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
});