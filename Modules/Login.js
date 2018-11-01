import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  StatusBar,
  Alert,
   Switch,
   Image,
   Dimensions,
   BackHandler ,
   ScrollView,
   TouchableHighlight,
  TouchableOpacity ,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { ProgressDialog } from 'react-native-simple-dialogs';

import Icon from 'react-native-vector-icons/FontAwesome';
const backgroundColor = '#007ea7';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
//String urlLogin:"http://182.76.45.142/oreva-sales/api/login.php";

function changeScreenOrientation() {
  Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT );
}

class Login extends  React.Component  {


static navigationOptions =
 {
	header:null,
	title: 'Login',
	
 headerStyle: {
            backgroundColor: backgroundColor,
			color:'white',
			paddingLeft:20,

        },
		 headerTitleStyle: {
            color: '#fff',
        },
	headerLeft: null
		/* headerBackTitleStyle: {
            color: '#fff',
        },
        headerTintColor: '#fff',*/
 };


 NavigateForgotFunction = () =>
 {
    this.props.navigation.navigate('Third');

 }

 NavigateActivityFunction = () =>
 {
    this.props.navigation.navigate('Sixth');

 }
 CallLoginService=()=>{
	
	  this.setState({ showProgress: true });
	fetch("http://ictemployee.suketuparikh.webfactional.com/api/login", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    email : this.state.TextInputEmail,
    password:this.state.TextInputPassword,
    
  })
}).then((response) => response.json()).then((responseJson) => {
        // you'll get the response in responseJson
		//Alert.alert('success');
		console.log('DATA CHANGE IS = '+responseJson.data[0].token);
		this.setState({ showProgress: false });
		this.NavigateActivityFunction();
		//Alert.alert(responseJson.data[0].);
    })
    .catch((error) => {
        //you will get error here.
		Alert.alert('error');
		//console.log(error.toString);
    });
 }

 constructor(props) {

    super(props)
 
    this.state = {

      TextInputPassword: '',
      TextInputEmail: '',
      TextInputPhoneNumber: '',
	  hidePassword: true

    }

  }
  
   managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

   CheckTextInputIsEmptyOrNot = () =>{

 const { TextInputPassword }  = this.state ;
 const { TextInputEmail }  = this.state ;
 const { TextInputPhoneNumber }  = this.state ;

if( TextInputEmail == '' )
{
  Alert.alert("Please Enter Email Id");
}else if (!this.validateEmail(this.state.TextInputEmail)) {
  // not a valid email
   Alert.alert("Please Enter valid Email Id");
} else if (TextInputPassword == '') {
  // not a valid email
   Alert.alert("Please Enter Password");
}
else{
 this.CallLoginService();
// Do something here which you want to if all the Text Input is filled.



}
   }

  validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

/* render()
 {
	const { navigate } = this.props.navigation;
    return(
       <View style = { styles.MainContainer }>

          <Text style = { styles.ActivityNameTextCss }> This Is MainActivity. </Text>


        <Button onPress={() => navigate('Second')} title = 'Open Second Activity'/>

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
   
                    <View style = { styles.input }>
					
					 <Icon
						name='unlock-alt'
						color='#b6b6b6'
						size={20}/>
                   <TextInput style = {styles.inputNew}
						  underlineColorAndroid = "transparent"
						  placeholder = "Password"
					      secureTextEntry = { this.state.hidePassword }
					      onChangeText={TextInputPassword => this.setState({TextInputPassword})}
						  placeholderTextColor = 'grey'
						  autoCapitalize = "none"
                   />
              <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                   <Image source = { ( this.state.hidePassword ) ? require('./assets/hide.png') : require('./assets/eye.png') } style = { styles.btnImage } />
                 </TouchableOpacity>
               </View>


           <TouchableOpacity  onPress = { this.NavigateForgotFunction }>
                <Text style={styles.ForgotText}>
                 Forgot Password?

               </Text>
         </TouchableOpacity>
		 
		  <ProgressDialog
                    visible={this.state.showProgress}
                   // title="Progress Dialog"
                    message="Please, wait..."
                    animationType="slide"
                    activityIndicatorSize="large"
                    activityIndicatorColor="#007ea7"
                />

         <View style={styles.StyleviewButton}>

    
       </View>
	   
	   <TouchableOpacity onPress={this.NavigateActivityFunction}>
                 <Text style={[styles.textViewStyle,{
                               height:42,backgroundColor:'#007ea7',marginTop:30,color:'white',borderWidth: 1,
							   borderColor: '#007ea7',borderRadius: 20,justifyContent:'center',alignItems:'center',textAlign: 'center',
							   overflow: 'hidden',paddingTop:8,fontSize:18,
                               marginLeft:30,marginRight:30}]}>
                               Login
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
	justifyContent:'flex-start',
    backgroundColor: '#FFFFFF',

  },
  textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',

  },
  image: {

  width:Dimensions.get('window').width-0,
   height:250,
  resizeMode:'stretch',
 
},
   ContaninerView:{
	  justifyContent:'center',
	  alignItems:'center',
	  alignSelf:'center'
  },
  infoContainer:
  {
    marginTop: 50,
	justifyContent:'center',
	alignSelf:'center'
  
  },
   visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 30,
    width: 30,
//	marginTop:5,
    padding: 5
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  welcome: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 20,
    marginTop: 100,
	marginLeft:10,
	marginRight:10,
	marginBottom:10,
	color:'#007ea7'
  },
  textViewStyle:{
   marginLeft:10,
   fontSize:16,
   fontFamily:fontBtnStyle,
   marginRight:20,
   color:'#575757'
 },
  ForgotText:{
	fontFamily:fontStyle,
	alignItems:'center',
	alignSelf:'flex-start',
    fontSize: 16,
    marginTop: 15,
	marginLeft:34,
	marginRight:10,
	marginBottom:10,
	color:'#007ea7'
  },
  TitleText:{
	alignItems:'center',
	alignSelf:'center',
    fontSize: 16,
	color:'#FFFFFF'
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
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 8,
  color: '#000000',
},
StyleviewButton:
  {
    color: Platform.OS === 'ios' ? '#ffffff' : '#ff4d2e',
    backgroundColor: Platform.OS === 'ios' ? '#ffffff' : '#000000',

    marginTop:0,
    marginLeft:20,
    marginRight:20,
    //backgroundColor: '#ff4d2e',


  },
  
input: {
  //  padding: 20,
  width:Dimensions.get('window').width-80,
  flexDirection: 'row',
    marginTop: 20,
	  marginLeft:30,
	  marginRight:30,
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
	width:Dimensions.get('window').width-50,
	marginLeft:10,
	fontSize:14,
	fontFamily:fontStyle,
    //justifyContent: 'center'

   },

     submitButton: {
      backgroundColor: '#007ea7',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }


});


export default Login;
