import React, { Component } from 'react';
 
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  StatusBar,
  Alert,
  Picker ,
  TouchableOpacity ,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { createStackNavigator } from 'react-navigation';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
//import CheckBox from 'react-native-check-box';
 //import Checkbox from 'react-native-custom-checkbox';
//import { CheckBox } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'; 



 
class FeedbackForm extends  Component<{}>
{
	
	constructor(){

    super();

    this.state={

      PickerValueHolder : ''
		
    }
  }
   
  
  GetSelectedPickerItem=()=>{

    Alert.alert(this.state.PickerValueHolder);
  }
    
 static navigationOptions =
 {
   
	title: 'Feedback Form',
	headerTintColor: 'white',
 headerStyle: {
            backgroundColor: '#ff4d2e',
			color:'white'
        },
		 headerTitleStyle: {
            color: '#fff',
        },
		
	
 };
 
 /*render()
 {

    return(
       <View style = { styles.MainContainer }>
 
          <Text style = { styles.ActivityNameTextCss }> This Is SecondActivity. </Text>
 
       </View>
    );
 }*/
  render() {
	   const { selected } = this.state;

       
    return (
      <View style={styles.container}>
       
	   <StatusBar
                    backgroundColor="#ff4d2e"
                    barStyle="light-content"
                />
				
				<Text style={styles.welcome}>
         Please enter your complain here
        </Text>
		

		
		<View style={styles.flowRight}>
<Text style={styles.Complaint}>
        Complaint Type : 
        </Text>
		
		 <Picker
		    style={styles.searchInput}
        selectedValue={this.state.PickerValueHolder}

        onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >

        <Picker.Item label="React Native" value="React Native" />
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="Html" value="Html" />
        <Picker.Item label="Php" value="Php" />
        <Picker.Item label="C++" value="C++" />
        <Picker.Item label="JavaScript" value="JavaScript" />

      </Picker>
</View>


          <AutoGrowingTextInput
		   underlineColorAndroid = "transparent"
            value={this.state.textValue}
            //onChange={(event) => this._onChange(event)}
            style={styles.input}
            placeholder={'Your Message'}
            placeholderTextColor='#66737C'
            maxHeight={200}
            minHeight={45}
            enableScrollToCaret
            ref={(r) => { this._textInput = r; }}
          />
		  
		  		
		<View style={styles.checkboxStyle}>
		
<CheckBox
          title="You want to send your name"
          checked={this.state.checked}
		   
		// checkedIcon={<Image source={require('./Resources/checked.png')} />}
		 //uncheckedIcon={<Image source={require('./Resources/disable_checkbox.png')}/>}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />

		
		
</View>
		 

  
  <View style={styles.StyleviewButton}>
<Button
  title="Submit"
	color='#ff4d2e'
  accessibilityLabel="Tap to Login Data"
  /*onPress={() => {
	  console.log('Hello'),
    Alert.alert('You tapped the Forgot button!');
  }}*/
  onPress={ this.GetSelectedPickerItem }
  />
</View>
      </View>
	 
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },
  welcome: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 18,
    marginTop: 40,
	marginLeft:10,
	marginRight:10,
	marginBottom:5,
	color:'#ff4d2e'
  },
 
  textInput: {
	  marginTop:10,
	  marginLeft:20,
	  marginRight:20,
    paddingLeft: 10,
    fontSize: 16,
    flex: 1,
	 borderColor: '#ff4d2e',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 8
  },
   Complaint: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 16,
    marginTop: 40,
	marginLeft:10,
	marginRight:10,
	marginBottom:5,
	color:'#ff4d2e'
  },
  sendName: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 16,
    marginTop: 5,
	marginLeft:10,
	marginRight:10,
	marginBottom:5,
	color:'#ff4d2e'
  },
  ForgotText:{
	alignItems:'center',
	alignSelf:'flex-start',
    fontSize: 14,
    marginTop: 10,
	marginLeft:22,
	marginRight:10,
	marginBottom:10,
	color:'#ff4d2e'
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
  marginLeft:15,
  marginTop:10
},


checkboxStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
   marginLeft:20,
   marginTop:20,
   padding:10,
 
},
  searchInput: {
	  alignItems:'center',
  alignSelf: 'center',
  height: 50,
  padding: 10,
  marginTop: 48,
  marginLeft:10,
  marginRight:30,
  marginBottom:15,
  flexGrow: 1,
  borderWidth: 1,
  borderColor: '#ff4d2e',
  borderRadius: 8,
 
  
},
StyleviewButton:
  {
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    backgroundColor: '#ff4d2e',

   
  },
input: {
	marginTop:20,
	  marginLeft:20,
	  marginRight:20,
      height: 40,
      borderColor: '#ff4d2e',
      borderWidth: 1,
	   color: '#000000'
   },
  
   
   
});
 
export default FeedbackForm;