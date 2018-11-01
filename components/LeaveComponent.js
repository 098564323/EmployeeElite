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

const topColor = '#007ea7';
const backgroundColor = '#e97600';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
import { DatePickerDialog } from 'react-native-datepicker-dialog';


import moment from 'moment';
import RadioGroup from 'react-native-radio-buttons-group';


export default class LeaveComponent extends React.Component {

	constructor(props){

    super(props);

    this.state={

      PickerValueHolder : '',
	   DateText: 'From',
	   DateToText:'To',

      DateHolder: null,
      DateToHolder: null,

	  data: [


            {
                label: 'Yes',
                color: topColor,
            },

			 {
                label: 'No',
                color: topColor,
            },


        ],

    }
  }





   /**
   * Textbox click listener
   */
  DatePickerMainFunctionCall = () => {

    let DateHolder = this.state.DateHolder;

    if(!DateHolder || DateHolder == null){

      DateHolder = new Date();
      this.setState({
        DateHolder: DateHolder
      });
    }

    //To open the dialog
    this.refs.FromDatePickerDialog.open({

      date: DateHolder,

    });

  }

   DateToPickerMainFunctionCall = () => {

    let DateToHolder = this.state.DateToHolder;

    if(!DateToHolder || DateToHolder == null){

      DateToHolder = new Date();
      this.setState({
        DateToHolder: DateToHolder
      });
    }

    //To open the dialog
    this.refs.ToDatePickerDialog.open({

      dateTo: DateToHolder,

    });

  }


  /**
   * Call back for dob date picked event
   *
   */
  onDatePickedFunction = (date) => {
    this.setState({
      dobDate: date,
      DateText: moment(date).format('DD-MMM-YYYY')
    });
  }

  onToDatePickedFunction = (dateTo) => {
    this.setState({
      dobToDate: dateTo,
      DateToText: moment(dateTo).format('DD-MMM-YYYY')
    });
  }

  GetSelectedPickerItem=()=>{

    Alert.alert(this.state.PickerValueHolder);
  }
    static navigationOptions = ({ navigation }) => {
		header: {
visible: false
}
        let drawerLabel = 'Leave';
        let drawerIcon = () => (
           /* <Image
                source={require('../icons/settings-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />*/
			 <Icon
		name='sign-out'
		//color='#767676'
		size={18}/>
        );
        return { drawerLabel, drawerIcon };
    }

	 onPress = data => this.setState({ data });
    render() {
		 const { selected } = this.state;
		  let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;

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
            <HeaderComponent title="Leave" {...this.props} />
 <ScrollView>
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff',
            }}>



		<View style={styles.flowRight}>

		<View style={{

						marginLeft:13,
						alignItems:'center',
						alignSelf:'center'
						}}>
		<Icon
						name='pencil'
						color='#b6b6b6'
						size={17}/>
						</View>
		 <Picker
		    style={styles.searchInput}
        selectedValue={this.state.PickerValueHolder}

        onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
		<Picker.Item label="Subject" value="" />
        <Picker.Item label="Half Leave" value="Half Leave" />
        <Picker.Item label="Full Leave" value="Full Leave" />
        <Picker.Item label="Early Leave" value="Early Leave" />
        <Picker.Item label="Late Coming" value="Late Coming" />


      </Picker>
</View>

<View style={{alignItems:'flex-start',marginLeft:34,marginTop:20}}>
<Text style={{textAlign:'left',fontSize:16,fontFamily:fontBtnStyle,color:'#515050'}}>Date</Text>
</View>

<View style={{
    flexDirection: 'row',
    alignItems: 'center',
	width:Dimensions.get('window').width,
	marginTop:10,
	flex:1,
	//backgroundColor:'cyan',
    justifyContent: 'center'}}>

			    <TouchableOpacity style={{flex:1,width:undefined,marginLeft:28}}onPress={this.DatePickerMainFunctionCall.bind(this)} >
			  <View style={{height:40,alignItems:'center',justifyContent:'center',textAlign:'center',marginLeft:10,marginRight:10, borderWidth: 1,borderColor: '#949494',borderRadius: 0,}}>

               <Text style={styles.datePickerText}>{this.state.DateText}</Text>
              </View>
			   <DatePickerDialog ref="FromDatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} />
			      </TouchableOpacity>



  <TouchableOpacity style={{flex:1,width:undefined,marginRight:38}} onPress={this.DateToPickerMainFunctionCall.bind(this)} >
              <View style={{height:40,alignItems:'center',justifyContent:'center', borderWidth: 1,borderColor: '#949494',borderRadius: 0,textAlign:'center', marginRight:10}}>
                <Text style={styles.datePickerText}>{this.state.DateToText}</Text>

              </View>
			   </TouchableOpacity>

			   <DatePickerDialog ref="ToDatePickerDialog" onDatePicked={this.onToDatePickedFunction.bind(this)} />
			</View>




          <AutoGrowingTextInput
		   underlineColorAndroid = "transparent"
            value={this.state.textValue}
            //onChange={(event) => this._onChange(event)}
            style={styles.input}
            placeholder={'Reason for leave'}
            placeholderTextColor='#B6B6B6'
            maxHeight={100}
            minHeight={45}
            enableScrollToCaret
            ref={(r) => { this._textInput = r; }}
          />


		  <View style={{marginLeft:34,alignItems:'flex-start',marginTop:20}}>
	<Text style={{fontSize:16,fontFamily:fontBtnStyle}}>Available in Ahmedabad?</Text>

		  </View>



		<View style={{alignItems:'flex-start',justifyContent:'flex-start',marginLeft:34,marginTop:15}}>
                <RadioGroup radioButtons={this.state.data} onPress={data => this.setState({ data })}
flexDirection='row'/>
</View>








		  <View style={{marginLeft:34,alignItems:'flex-start',marginTop:20}}>
	<Text style={{fontSize:16,fontFamily:fontBtnStyle}}>Available in Phone Number?</Text>

		  </View>

		  <View style = {styles.TLinput}>

					<Icon
						name='phone'
						color='#b6b6b6'
						size={17}/>

				<TextInput
				  style = {styles.inputNew}
								underlineColorAndroid = "transparent"
								keyboardType='numeric'
								onChangeText={TextInputEmail => this.setState({TextInputEmail})}
								placeholder = "Phone Number"
								placeholderTextColor = 'grey'
								autoCapitalize = "none"
								 maxLength={10}  //setting limit of input
									/>


</View>


	   <TouchableOpacity onPress={this.GetSelectedPickerItem}>
                  <Text style={[styles.textViewStyle,{
                               height:42,backgroundColor:'#007ea7',width:160,marginTop:30,color:'white',borderWidth: 1,marginBottom:20,
							   borderColor: '#007ea7',borderRadius: 8,justifyContent:'center',alignItems:'center',textAlign: 'center',
							   overflow: 'hidden',paddingTop:8,fontSize:18,
                               marginLeft:30,marginRight:30} ]}>
                              Send
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
   buttonContainer: {
        flex: 1,
    },
  datePickerBox:{

	    flex: 1,
    marginTop: 9,
    borderColor: '#949494',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
	marginRight:20,
	alignItems:'center',
	//backgroundColor:'red',
    justifyContent:'center'
  },
  datePickerBoxToDate:{
    marginTop: 9,
    borderColor: '#949494',
    borderWidth: 0.5,
    padding: 0,
	alignItems:'center',

	   flex: 1,
	  marginRight:45,
	//  backgroundColor:'yellow',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
	justifyContent:'center'

  },

  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
	fontFamily:fontStyle,
    borderWidth: 0,
    color: '#515050',

  },
  textViewStyle:{
   marginLeft:10,
   fontSize:16,
   marginRight:25,
   alignItems:'center',
   textAlign:'center',
   justifyContent:'center',
   alignSelf:'center',
   color:'#515050',
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
  borderWidth: 1,
  alignItems:'center',
  textAlign:'center',
  marginTop:20,
  fontFamily:fontStyle,
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
   TLinput: {
  //  padding: 20,
  width:Dimensions.get('window').width-80,
  flexDirection: 'row',
    marginTop: 20,
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
	paddingLeft:10,
	color:'#949494',
	fontFamily:fontStyle,
    //justifyContent: 'center'

   },

input: {
	 width:Dimensions.get('window').width-76,
	marginTop:20,
	  marginLeft:34,
	  marginRight:20,
	  paddingLeft:10,
      height: 40,
	  fontFamily:fontStyle,
      borderColor: '#949494',
      borderWidth: 1,
	   color: '#515050'
   },
     valueText: {
        fontSize: 16,
        marginBottom: 10,
		color:'#515050'
    },



});
