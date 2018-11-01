import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  TextInput,
  StatusBar,
  Alert,
  TouchableOpacity ,
  View
} from 'react-native';

class Splash extends  React.Component  {

 static navigationOptions =
 {
    header: null,
	title: 'Splash',
 headerStyle: {
            backgroundColor: 'red',
			color:'white'

        },
		 headerTitleStyle: {
            color: '#fff',
        },
		/* headerBackTitleStyle: {
            color: '#fff',
        },
        headerTintColor: '#fff',*/
 };
componentWillMount(){
		setTimeout(()=>{
			//this.props.navigation.navigate('Second');
      this.props.navigation.navigate('Second');
		},2000)
	}




 NavigateActivityFunction = () =>
 {
    this.props.navigation.navigate('Second');

 }

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
                    backgroundColor="#007ea7"
                    barStyle="light-content"
                />


<View style={styles.ContaninerView}>
		<Image source={require('../icons/App-icon.png')} style={styles.image}/>
		</View>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	justifyContent:'center',
    backgroundColor: '#007ea7',
  },
  ContaninerView:{

	  justifyContent:'center',
	  alignItems:'center',
	  alignSelf:'center'
  },
  welcome: {
	  alignItems:'center',
	  alignSelf:'center',
    fontSize: 20,
	marginLeft:10,
	marginRight:10,
	marginBottom:10,
	color:'#ffffff'
  },
  image: {

  width: 240,
  height: 60,
  resizeMode:'stretch',
},

});


export default Splash;
