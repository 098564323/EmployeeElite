/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
CloudComponent
*/
import React, { Component } from 'react';
import { Info } from '../screenNames';
import HeaderComponent from './HeaderComponent';
import {
    AppRegistry,ScrollView,StatusBar,Alert,Dimensions,Platform,StyleSheet,Text, View, FlatList,Image,TouchableOpacity, TouchableHighlight
} from 'react-native';

import flatListData from '../data/flatListData';
import RowData from '../data/RowData';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';
const backgroundColor = '#FFFFFF';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import Util from '../Utils/Util';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-swipeable';
import Swipeout from 'react-native-swipeout';
const topColor = '#007ea7';
function Example1({onOpen, onClose}) {
  return (
    <Swipeable

      rightButtons={[
        <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
          <Text>1</Text>
        </TouchableOpacity>,
        <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
          <Text>2</Text>
        </TouchableOpacity>
      ]}
      onRightButtonsOpenRelease={onOpen}
      onRightButtonsCloseRelease={onClose}
    >
      <View style={[styles.listItem, {backgroundColor: 'salmon'}]}>
        <Text>Example 1</Text>
      </View>
    </Swipeable>
  );
}

class FlatListItem extends React.Component {



    render() {
		const swipeSettings={
			autoClose:true,
			onClose:(secId,rowId,direction)=>{

			},
			onOpen:(secId,rowId,direction)=>{

			},
			right:[
			{
				onPress: () =>{

				},
				text:'Delete',type:'delete'
			}
			],
			rowId:this.props.index,
			sectionId:1
		}

        return (


		  <View style={styles.container
		 }>


			<View style={{
						flex: 1,
						//padding:13,
						//marginTop:5,
						marginLeft:20,
						flexDirection: 'row',
						backgroundColor: '#FFFFFF',}}>

			<View style={{

						backgroundColor: '#FFFFFF',}}>
			<View style={styles.CircleShapeView}>

			</View>

			 <View
				style = {{
				  height: undefined,
				  flex:1,
				  width: 1,
				  marginLeft:9,
				  backgroundColor: '#cccccc'
				}}
			  />

			</View>

			<View style = {{
				  flexDirection:'column',
				  backgroundColor: '#FFFFFF'
				}}>

			  <Text style={styles.textDate}>{this.props.item[0].time}</Text>



			<FlatList


			   data={this.props.item}

				 //ItemSeparatorComponent = {this.renderSeparator}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItemRowData item={item} index={index}>

                    </FlatListItemRowData>);
                }}>
				</FlatList>

			</View>

			  </View>

          </View>



        );
    }
}

class FlatListItemRowData extends React.Component {
	SelectAcceptBtn = () =>
 {
       Alert.alert('Yes');

 }
 SelectRejectBtn = () =>
 {
       Alert.alert('No');

 }


    render() {
	const swipeSettings={
			autoClose:true,
			onClose:(secId,rowId,direction)=>{

			},
			onOpen:(secId,rowId,direction)=>{

			},
			right:[

			{
				onPress: () =>{
					Alert.alert('click on first');
				},
				text:'Delete',type:'delete',backgroundColor:'blue',height:10
			},
			{
				onPress: () =>{
					Alert.alert('click on second');
				},
				text:'Yes',type:'Yes'
			}
			],
			rowId:this.props.index,
			sectionId:1
		}

		 const swipeBtns = [
      {
        component: (
		 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:5,alignSelf:'center',backgroundColor:'white'}}>
		 <TouchableOpacity   style={{
                flex: 1,
				height:60,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
				backgroundColor:topColor
              }} onPress={this.SelectAcceptBtn}>
          <View
              style={{
                flex: 1,

                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
				backgroundColor:topColor
              }}
          >

             <Icon
		name='check'
		color='#FFFFFF'
		size={18}/>


          </View>
		  </TouchableOpacity>

		   <TouchableOpacity   style={{
					flex: 1,

					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
		   backgroundColor:'#035c79'}}onPress={this.SelectRejectBtn}>
		            <View style={{
					flex: 1,
					height:60,
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					backgroundColor:'#035c79'
              }}
          >

             <Icon
		name='close'
		color='#FFFFFF'
		size={18}/>
		</View>
		  </TouchableOpacity>
		  </View>
        ),
		 backgroundColor:'transparent',
        underlayColor: 'white',
       // onPress: () => {
          //console.log("Delete Item");
        //},
      },

    ];



        return (
			<Swipeout

			right={swipeBtns}
            autoClose="true"
			style={{marginBottom:10,marginTop:2}}
            backgroundColor="transparent">
			<TouchableOpacity onPress={()=>{
          let utilObject = Util.getInstance();
            //
          utilObject.getNavData().navigate("Seventh");

          }}>


          <View style={styles.container }>


		  	<View style={{

							marginLeft:5,
							paddingBottom:10,
							padding:0,
							alignItems:'flex-start',
							alignSelf:'flex-start',
							backgroundColor: '#FFFFFF',}}>



			<CardView
			  marginLeft={10}
			  cardElevation={2}
			  cardMaxElevation={2}
			  cornerRadius={5}
			  >


			  <View style={{

							width:Dimensions.get('window').width-90,
							backgroundColor: '#FFFFFF',}} >


              <Text style={styles.textName}>{this.props.item.title}</Text>

			  <View style={{flexDirection:'row'}}>
              <Text style={styles.textDescription}>{this.props.item.description}</Text>
              <Text style={styles.textDescription2}>{"India"}</Text>

			  </View>
			  </View>


			  </CardView>

			 </View>

		</View>
		</TouchableOpacity>
			</Swipeout>

		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
	justifyContent:'flex-start',
    backgroundColor: 'white',


  },
    flatListItem: {

        padding: 10,
        fontSize: 16,

    },
	 CircleShapeView: {
    width: 20,
    height: 20,

    borderRadius: 50/2,
    backgroundColor: '#007ea7'
},
cardViewStyle:{

    width: 250,
    height: 150,
	backgroundColor:'black'

  },
circleText:{
	alignItems:'center',
	alignSelf:'center',
	justifyContent:'center',
    fontSize: 16,
	fontWeight: 'bold',
	color:'#ffffff'
  },
  textDate:{

		paddingLeft:12,
		color:'#515050',
		marginBottom:12,
		fontSize:16,
		marginTop:0,
		alignItems:'center',
		alignSelf:'flex-start',
		//backgroundColor:'red',
		fontFamily:fontStyle,
		color:'#035c79',
		//backgroundColor:'red',
		marginLeft:5,
	},
	textName:{

		paddingLeft:12,
		color:'#515050',
		marginBottom:12,
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
		marginBottom:12,
		fontSize:16,
		marginTop:10,
		alignItems:'center',
		alignSelf:'flex-start',
		//backgroundColor:'red',
		fontFamily:fontStyle,
		//backgroundColor:'red',
		marginLeft:5,
	},
	textDescription:{
		color:'#515050',
		marginBottom:14,
		marginLeft:15,
		fontFamily:fontStyle,
		//backgroundColor:'black',
		fontSize:14
	},

	textDescription2:{
		color:'#515050',
		marginBottom:14,
		marginLeft:40,
		textAlign:'center',
		alignItems:'center',
		alignSelf:'center',
		fontFamily:fontStyle,
		//backgroundColor:'black',
		fontSize:14
	},
	listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
});


export default class HomeComponent extends Component {

	constructor(){
    super()
	// this.navigate = this.props.navigation.navigate;
    this.data = [
      [{time: '14 Jul 2018', title: 'Event 1', description: 'Event 1 Description'},{time: '14 Jul 2018', title: 'Event 1', description: 'Event 1 Description'}],
      [{time: '09 Apr 2018', title: 'Event 2', description: 'Event 2 Description'}],
      [{time: '25 May 2018', title: 'Event 3', description: 'Event 3 Description'}],
      [{time: '30 Aug 2018', title: 'Event 4', description: 'Event 4 Description'},{time: '30 Aug 2018', title: 'Event 4', description: 'Event 4 Description'},{time: '30 Aug 2018', title: 'Event 4', description: 'Event 4 Description'}],
      [{time: '01 Nov 2018', title: 'Event 5', description: 'Event 5 Description'}]
    ]
  }

  componentDidMount(){
    //  Alert.alert("Navigation :: "+this.props.navigation);
      var utilObject = Util.getInstance();
      utilObject.setNavData(this.props.navigation);
    }


	renderSeparator = () => {
    return (
      <View
        style = {{
          height: 150,
          width: 2,
		  marginLeft:27,
          backgroundColor: '#949494'
        }}
      />
    )
  }
    static navigationOptions = ({ navigation }) => {
		header: {
visible: false
}
        let drawerLabel = 'Home';
        let drawerIcon = () => (
            /*<Image
                source={require('../icons/cloud-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />*/
			 <Icon
		name='home'
		//color='#767676'
		size={18}/>
        );
        return { drawerLabel, drawerIcon };
    }

	 goToNextScreen = () => {
         this.props.navigation.navigate('Seventh')
		 //Alert.alert('SUCCESS');
     }


    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
		 <StatusBar
                    backgroundColor="#035c79"
                    barStyle="light-content"
                />
            <HeaderComponent title="DashBoard" rightIcon="" {...this.props}
								/>

            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,

            }}>

			  <Text style={styles.textTitle}>Upcoming Events</Text>



               <FlatList
			   style={{marginTop:10}}
               data={this.data}
				 //ItemSeparatorComponent = {this.renderSeparator}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
				</View>



        </View>);
    }
}
