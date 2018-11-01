import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity ,
  View
} from 'react-native';

import { WebView } from 'react-native';

class Homepage extends  React.Component  {
 
 static navigationOptions =
 {
  header: null,
	title: 'Homepage',
	headerTintColor: 'white',
headerStyle: {
            backgroundColor: '#ff4d2e',
			color:'white'
        },
		 headerTitleStyle: {
            color: '#fff',
        },
 };

 

  render() {
    return (
      <View style={styles.container}>
	  
	   
       <WebView
        source={{uri: 'http://icreativetechnologies.com/'}}
    
      />
	 


      </View>
	  
	 
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 20,
    marginTop: 100,
	marginLeft:10,
	marginRight:10,
	marginBottom:10,
	color:'#ffffff'
  },
   
});

 
export default Homepage;