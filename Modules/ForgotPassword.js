import React, { Component } from 'react';
 
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  StatusBar,
  Dimensions,
  Alert,
  Image,
  ActionBarImage,
  TouchableOpacity ,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
 
class ForgotPassword extends   React.Component
{
    
 static navigationOptions =
 {
	header:null,
	title: 'Forgot Password',
	headerTintColor: 'white',
 headerStyle: {
            backgroundColor: '#007EA7',
			color:'white'
        },
		 headerTitleStyle: {
            color: '#fff',
        },
		
		 
		
		
	
 };
 
 MoveToFeedbackForm = () =>
 {
    this.props.navigation.navigate('Second');
	
    
 }
 onClickPressBack = () =>
 {
       this.props.navigation.goBack();
      
 }
 
 /*render()
 {

    return(
       <View style = { styles.MainContainer }>
 
          <Text style = { styles.ActivityNameTextCss }> This Is SecondActivity. </Text>
 
       </View>
    );
 }*/
  render() {
	  
    return (
    <View style={styles.container}>

	    <StatusBar
                    backgroundColor="#035c79"
                    barStyle="light-content"
                />
       
		
		
			
		<View style={styles.ContaninerView}>
		<Image source={require('../icons/new_image.png')} style={styles.image}/>
		
		 <TouchableOpacity  style={{alignSelf:'flex-start',
                  margin:20,top:0,marginTop:Platform.OS === 'ios' ? 44 : 20,position: 'absolute'}} onPress={this.onClickPressBack}>
                <Icon name="chevron-left" size={20} color='white' />
            </TouchableOpacity>
		
			
		 
		
		</View>
	
        <View style={styles.infoContainer}>
		  
		<View style = {styles.input}>
		
		 <Icon
		name='envelope'
		color='#b6b6b6'
		size={18}/>
  <TextInput 
  style = {styles.inputNew}
                underlineColorAndroid = "transparent"
                onChangeText={TextInputEmail => this.setState({TextInputEmail})}
                placeholder = "Email"
                placeholderTextColor = 'grey'
                autoCapitalize = "none"
                    />

 
</View>
   
                  
         <View style={styles.StyleviewButton}>

    
       </View>
	   
	   <TouchableOpacity onPress={this.CallLoginService}>
                 <Text style={[styles.textViewStyle,{
                               height:42,backgroundColor:'#007ea7',marginTop:30,color:'white',borderWidth: 1,
							   borderColor: '#007ea7',borderRadius: 20,justifyContent:'center',alignItems:'center',textAlign: 'center',
							   overflow: 'hidden',paddingTop:8,fontSize:18,
                               marginLeft:20,marginRight:20}]}>
                               Submit
                 </Text>
               </TouchableOpacity>
        </View>



      </View>
	 
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
	justifyContent:'flex-start',
  },
  infoContainer:
  {
    marginTop: 70,
	justifyContent:'center',
	alignSelf:'center'
	
  
  },
  TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 }, 
 IconStyle:
 {
   
	position:'absolute',
  
   
 },
  welcome: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 20,
    marginTop: 100,
	marginLeft:10,
	marginRight:10,
	marginBottom:10,
	color:'#007EA7',
	fontFamily:"CenturyGothicRegular",
  },
   textViewStyle:{
   marginLeft:10,
   fontSize:16,
   marginRight:20,
   color:'#575757',
   fontFamily:fontBtnStyle,
 },
  ContaninerView:{
	
	  flexDirection:'column',
	  justifyContent:'center',
	  alignItems:'center',
	  alignSelf:'center'
	  
  },
  image: {

  width:Dimensions.get('window').width,
   height:250,
   paddingBottom:20,
  resizeMode:'stretch',
 
},
  ForgotText:{
	alignItems:'center',
	alignSelf:'flex-start',
    fontSize: 14,
    marginTop: 10,
	marginLeft:22,
	marginRight:10,
	marginBottom:10,
	color:'#007ea7'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
},
flow: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
},
  searchInput: {
  alignSelf: 'center',
  height: 50,
  padding: 10,
  marginTop: 100,
  marginLeft:30,
  marginRight:30,
  marginBottom:15,
  flexGrow: 1,
  fontSize: 18,
  fontFamily:fontStyle,
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 8,
  color: '#000000',
},
StyleviewButton:
  {
    marginTop:0,
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#007ea7',

   
  },
input: {
  //  padding: 20,
  width:Dimensions.get('window').width-80,
  flexDirection: 'row',
    marginTop: 20,
	  marginLeft:20,
	  marginRight:20,
      height: 40,
      borderColor: '#B6B6B6',
      borderWidth: 1,
	   color: '#000000',
	   alignItems:'center',
     //alignItems: 'center'
     //alignSelf: 'center'
     paddingLeft: 10

   },
   inputNew: {
    //   marginTop: 15,
	  // marginLeft:20,
	  // marginRight:20,
	  // marginBottom:10,
    // borderColor: '#ff4d2e',
    //   borderWidth: 1,
	  //  color: '#000000'
    marginTop:Platform.OS === 'ios' ? 10 : 0,
	width:Dimensions.get('window').width-70,
	marginLeft:10,
	fontSize:14,
	fontFamily:fontStyle,
    //justifyContent: 'center'

   },
  
   
   
});
 
export default ForgotPassword;