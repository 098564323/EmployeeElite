/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
SettingsComponent
*/
import React, { Component } from 'react';
import { Info } from '../screenNames';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Button from 'react-native-button';
import {
   Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  StatusBar,
  ScrollView,
  Alert,
  Dimensions,
  Picker ,
  TouchableOpacity ,
  View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import { StackNavigator } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import { createStackNavigator } from 'react-navigation';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { CheckBox } from 'react-native-elements';


const backgroundColor = '#e97600';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
export default class SettingsComponent extends Component {

	constructor(){

    super();

    this.state={

      PickerValueHolder : ''

    }
  }
  GetSelectedPickerItem=()=>{

    Alert.alert(this.state.PickerValueHolder);
  }
    static navigationOptions = ({ navigation }) => {
		header: {
visible: false
}
        let drawerLabel = 'Suggestion';
        let drawerIcon = () => (
           /* <Image
                source={require('../icons/settings-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />*/
			 <Icon
		name='comments'
		//color='#767676'
		size={18}/>
        );
        return { drawerLabel, drawerIcon };
    }
    render() {
		 const { selected } = this.state;

        return (

		<View style={{
            flex: 1,
            flexDirection: 'column',
			backgroundColor:'#FFFFFF',
        }}>
		  <StatusBar
                    backgroundColor="#035c79"
                    barStyle="light-content"
                />
            <HeaderComponent title="Suggestion" {...this.props} />
 <ScrollView>
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff',
            }}>
              <Text style={styles.welcome}>
         Please enter your complain here
        </Text>


		<View style = {styles.Nameinput}>


				<TextInput
				  style = {styles.inputNew}
								underlineColorAndroid = "transparent"
								onChangeText={TextInputEmail => this.setState({TextInputEmail})}
								placeholder = "Your name"
								placeholderTextColor = 'grey'
								autoCapitalize = "none"
									/>


</View>

		<View style={styles.flowRight}>

		 <Picker
		    style={styles.searchInput}
        selectedValue={this.state.PickerValueHolder}

        onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
		<Picker.Item label="Complaint Type" value="" />
        <Picker.Item label="HR Policy" value="HR Policy" />
        <Picker.Item label="Company Environment" value="Company Environment" />
        <Picker.Item label="Session" value="Session" />
        <Picker.Item label="Other" value="Other" />

      </Picker>
</View>



		<View style={styles.checkboxStyle}>

			<CheckBox
			  title="You want to send your name"
			  checked={this.state.checked}
			   checkedColor='#007EA7'
			   uncheckedColor='#007EA7'
			// checkedIcon={<Image source={require('./Resources/checked.png')} />}
			 //uncheckedIcon={<Image source={require('./Resources/disable_checkbox.png')}/>}
			  onPress={() => this.setState({ checked: !this.state.checked })}
			/>



</View>
          <AutoGrowingTextInput
		   underlineColorAndroid = "transparent"
            value={this.state.textValue}
            //onChange={(event) => this._onChange(event)}
            style={styles.input}
            placeholder={'Your Message'}
            placeholderTextColor='#B6B6B6'
            maxHeight={200}
            minHeight={45}
            enableScrollToCaret
            ref={(r) => { this._textInput = r; }}
          />



	   <TouchableOpacity onPress={this.GetSelectedPickerItem}>
                 <Text style={[styles.textViewStyle,{
                              height:42,backgroundColor:'#007EA7',marginTop:30,color:'white',borderWidth: 1,
							  borderColor: '#007ea7',borderRadius: 20,
                              justifyContent:'center',alignItems:'center',textAlign: 'center',
                              overflow: 'hidden',paddingTop:8,fontSize:18,
                              marginLeft:30,marginRight:40}]}>
                              Submit
                 </Text>
               </TouchableOpacity>


            </View>
			</ScrollView>
        </View>
		  );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  welcome: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 18,
    marginTop: 40,
	marginLeft:10,
	marginRight:10,
	marginBottom:5,
	color:'#515050',
	fontFamily:fontStyle,

  },

  textInput: {
	  marginTop:10,
	  marginLeft:20,
	  marginRight:20,
    paddingLeft: 10,
    fontSize: 16,
    flex: 1,
	fontFamily:fontStyle,
	 borderColor: '#007EA7',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 8
  },
  textViewStyle:{
   marginLeft:10,
   fontSize:16,
   marginRight:25,
   color:'#575757',
   fontFamily:fontBtnStyle
 },
   Complaint: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 16,
    marginTop: 10,
	marginLeft:15,
	marginRight:10,
	marginBottom:5,
	color:'#007EA7',
	fontFamily:fontStyle,
  },

  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
  marginLeft:34,
  height: 40,
  width:Dimensions.get('window').width-78,
  alignItems:'center',
  textAlign:'center',
  marginTop:15,
  fontFamily:fontStyle,
  borderWidth: 1,
  borderColor: '#949494',
  borderRadius: 0,
  // backgroundColor:'#000000',
},


checkboxStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
  backgroundColor:'#ffffff',
  color:'#000000',
   marginTop:10,
   fontFamily:fontStyle,
   marginLeft:22


},
  searchInput: {
	  alignItems:'center',
  alignSelf: 'center',

  marginTop:10,
   fontSize:13,
  textAlign:'center',
  alignSelf:'center',
  marginLeft:10,
  color:'#949494',
  fontFamily:fontStyle,
  //marginRight:30,
  marginBottom:15,
  flexGrow: 1,



},
Nameinput: {
  //  padding: 20,
  width:Dimensions.get('window').width-80,
  flexDirection: 'row',
    marginTop: 40,
	  marginLeft:35,
	  marginRight:30,
      height: 40,
      borderColor: '#949494',
      borderWidth: 1,
	fontFamily:fontStyle,
	   color: '#949494',
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
	width:Dimensions.get('window').width-50,
	marginLeft:10,
	color:'#949494',
	fontFamily:fontStyle,
    //justifyContent: 'center'

   },

input: {
	 width:Dimensions.get('window').width-76,
	marginTop:10,
	  marginLeft:34,
	  marginRight:20,
	  paddingLeft:10,
      height: 40,
	  fontFamily:fontStyle,
      borderColor: '#949494',
      borderWidth: 1,
	   color: '#949494'
   },



});
