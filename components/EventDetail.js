import React, { Component } from 'react';
import { Info } from '../screenNames';
import HeaderComponent from './HeaderComponent';
import {
    AppRegistry,StatusBar,Alert,Dimensions,Platform,StyleSheet,Text, ScrollView,View, FlatList,Image,TouchableOpacity, TouchableHighlight
} from 'react-native';

import flatListData from '../data/flatListData';
import RowData from '../data/RowData';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';
const backgroundColor = '#FFFFFF';
const topColor = '#007ea7';
const redColor = '#FF0000';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

export default class EventDetail extends React.Component {
	NavigateActivityFunction = () =>
 {
    this.props.navigation.navigate('Eight');

 }
 NavigateToBackScreen=()=>
 {
	   this.props.navigation.goBack();
 }

	static navigationOptions =
 {
	header:null,
	title: 'Details',
	headerTintColor: 'white',
 headerStyle: {
            backgroundColor: '#007ea7',
			color:'white'
        },
		 headerTitleStyle: {
            color: '#fff',
        },


 };



 render() {
        return (<View style={styles.container}>


		<View style={{
			width:Dimensions.get('window').width,
			height:undefined,
			flex:1,
			}}>


		<View style={{backgroundColor:topColor,flex:2,height:undefined}}>





		<View style={{
				alignItems:'center',
				alignSelf:'center',
				marginTop:50,
				justifyContent:'center',}}>
		<View style={styles.CircleShapeView}>
		 <View style={styles.circleText}>
     <Image
 style={{width: 100, height: 100,borderRadius: 100/2}}
source={require('../icons/devangsir.jpg')}
/>
               </View>


		</View>
		 <Text style={{fontSize:16,color:'#FFFFFF',fontFamily:fontStyle,marginTop:10,marginBottom:5,textAlign:'center'}}>Devang Mehta</Text>


		</View>
		</View>
		<View style={{backgroundColor:'#FFFFFF',flex:3.5,height:undefined,alignItems:'center',justifyContent:'flex-end'}}>





		</View>

		</View>

		<View style={{
			width:Dimensions.get('window').width,
			height:Dimensions.get('window').height,
			position:'absolute',
			backgroundColor:'#FF000000',
			flex:1,
			}}>
				<View style={{backgroundColor:'#FF000000',flex:2,height:undefined}}>
				</View>

				<View style={{backgroundColor:'#FF000000',flex:4.5,height:undefined,margin:30}}>

					<CardView
					  marginLeft={10}
					  cardElevation={2}
					  cardMaxElevation={2}
					  style={styles.cardViewStyle}
					  cornerRadius={5}>

					  <View style={{width:undefined,height:330,backgroundColor:'#FFFFFF',padding:10}}>

					 <ScrollView>

					  <View style={{alignItems:'center',alignSelf:'flex-start',flexDirection:'row',padding:5,backgroundColor:'white'}}>

					  <View style={{marginTop:10}}>
					   <Icon
						name='tag'
						color='#b6b6b6'
						size={22}/>
						</View>
						<Text style={styles.textTitle}>Title</Text>
						</View>



					  	<View style={{backgroundColor:'white'}}>

						<Text style={styles.textDescription}>Being Proactive</Text>
						</View>




			  <View style={{alignItems:'center',alignSelf:'flex-start',flexDirection:'row',padding:5,backgroundColor:'white'}}>

					  <View style={{marginTop:10}}>
					   <Icon
						name='file-text'
						color='#b6b6b6'
						size={22}/>
						</View>
						<Text style={styles.textName}>Description</Text>
						</View>



					  	<View style={{backgroundColor:'white'}}>

						<Text style={styles.textDescription}>Being proactive means taking responsibility for your life and actions rather than just watching how things happen</Text>
						</View>



						 <View style={{alignItems:'center',alignSelf:'flex-start',flexDirection:'row',padding:5,backgroundColor:'white'}}>

					  <View style={{marginTop:10}}>
					   <Icon
						name='calendar'
						color='#b6b6b6'
						size={22}/>
						</View>
						<Text style={styles.textName}>Date and Time</Text>
						</View>



					  	<View style={{backgroundColor:'white'}}>

						<Text style={styles.textDescription}>14 Aug 18 03:30PM</Text>
						</View>



						 <View style={{alignItems:'center',alignSelf:'flex-start',flexDirection:'row',padding:5,backgroundColor:'white'}}>

					  <View style={{marginTop:10}}>
					   <Icon
						name='map-marker'
						color='#b6b6b6'
						size={22}/>
						</View>
						<Text style={styles.textName}>Venue</Text>
						</View>



					  	<View style={{backgroundColor:'white'}}>

						<Text style={styles.textDescription}>Titanium City center,Ahmedabad</Text>
						</View>
						</ScrollView>
					  </View>
					  </CardView>

				</View>




		</View>

		 <TouchableOpacity style={{position:'absolute',bottom:0,marginBottom:Platform.OS === 'ios' ? 50 : 20}} onPress={() => {
    this.NavigateActivityFunction()
    }}>
    <Text style={[styles.textViewStyle,{
                       height:42,backgroundColor:'#007ea7',width:160,marginTop:0,color:'white',borderWidth: 1,marginBottom:Platform.OS === 'ios' ? 50 : 0,
         borderColor: '#007ea7',borderRadius: 8,justifyContent:'center',alignItems:'center',textAlign: 'center',
         overflow: 'hidden',paddingTop:8,fontSize:18,
                       marginLeft:30,marginRight:30,} ]}>Feedback </Text>
                     </TouchableOpacity>

				<TouchableOpacity style={{position:'absolute',top:0,alignItems:'flex-start',justifyContent:'flex-start',alignSelf:'flex-start'}} onPress={() => {
    this.props.navigation.goBack()}}>
			<View style={{ flexDirection: 'row',marginLeft:10,textAlign:'left',alignItems:'center',padding:10}}>


		 <Icon
						name='chevron-left'
						color='#FFFFFF'
						size={22}/>

		<Text style={{fontSize:22,color:'white',fontFamily:fontStyle,alignItems:'center',justifyContent:'center',alignSelf:'center',textAlign:'center',paddingLeft:15}}>Details</Text>
		</View>
		</TouchableOpacity>

		</View>

		);
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
	width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:topColor,


  },
   CircleShapeView: {
    width: 100,
    height: 100,
	alignItems:'center',
	alignSelf:'center',
	justifyContent:'center',
    borderRadius: 100/2,
    backgroundColor: '#FFFFFF'
},
cardViewStyle:{

   backgroundColor:'#FF000000'

  },

circleText:{
	alignItems:'center',
	alignSelf:'center',
	justifyContent:'center',
    fontSize: 16,
	fontWeight: 'bold',
	color:'#ffffff'
  },
  textName:{

		paddingLeft:12,
		color:'#515050',

		fontSize:16,
		marginTop:5,
		alignItems:'center',
		alignSelf:'flex-start',
		//backgroundColor:'red',
		fontFamily:fontBtnStyle,
		//backgroundColor:'red',
		marginLeft:5,
	},
	textTitle:{

		paddingLeft:12,
		color:'#515050',

		fontSize:16,
		marginTop:10,
		alignItems:'center',
		alignSelf:'flex-start',
		//backgroundColor:'red',
		fontFamily:fontBtnStyle,
		//backgroundColor:'red',
		marginLeft:5,
	},
	textDescription:{
		color:'#515050',
		marginBottom:14,
		marginLeft:40,
		marginRight:40,
		alignItems:'center',
		//alignSelf:'center',
		fontFamily:fontStyle,
		//backgroundColor:'black',
		fontSize:14
	},
	 textViewStyle:{
   marginLeft:10,
   fontSize:16,
   fontFamily:fontBtnStyle,
   marginRight:20,
   color:'#575757'
 },
  bottomView:{

      width: '100%',
      height: 50,
      backgroundColor: '#FF9800',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },

});
