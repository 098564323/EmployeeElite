/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
InfoComponent
*/
import React, { Component } from 'react';
import { Info } from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View,StyleSheet,Alert,FlatList,Dimensions,StatusBar,TouchableOpacity, TextInput,Platform,Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import SurveyListData from '../data/SurveyListData';
import Icon from 'react-native-vector-icons/FontAwesome';
const backgroundColor = '#FFFFFF';
const topColor = '#007ea7';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

class FlatListItem extends React.Component {

  constructor(){

   super();


   this.state ={
    TextName:'',
     status:false,
     isHidden: false,

   }
  }

  ShowHideTextComponentView = () =>{

  if(this.state.status == true)
  {
   this.setState({status: false})
   this.setState({isHidden: false})

  }
  else
  {
   this.setState({status: true})
   this.setState({isHidden: true})

  }
  }

    render() {


        return (

          <View style={{marginBottom:5,width:undefined,flexDirection:'column',alignItem:'center',backgroundColor: '#FFFFFF',borderBottomWidth:1,borderBottomColor:'#ECECEC',paddingTop:8,paddingLeft:12,paddingRight:12,paddingBottom:15,justifyContent:'flex-start'}}>
 				<StatusBar
                     backgroundColor="#035c79"
                     barStyle="light-content"
                 />

          <View style={{alignItem:'center',width:Dimensions.get('window').width,flex:1,height:undefined}}>
               <View style={{backgroundColor:'red',flex:2,height:undefined}}></View>

 			    <View style={{backgroundColor:'yellow',flex:5,height:undefined}}></View>
 				   </View>

           </View>

        );
    }
}

export default class InfoComponent extends Component {
  constructor(props){

    super(props);

    this.state={



    }
  }
	static navigationOptions = {
header: null,
};
    static navigationOptions = ({ navigation }) => {
		header: {
visible: false
}
        let drawerLabel = 'Survey';
        let drawerIcon = () => (
            /*<Image
                source={require('../icons/info-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />*/
			 <Icon
		name='paper-plane'
		//color='#767676'
		size={18}/>
        );
        return { drawerLabel, drawerIcon };
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
			backgroundColor:'#FFFFFF',
        }}>
		 <StatusBar
                    backgroundColor="#035c79"
                    barStyle="light-content"
                />

             <View style={{
                flex: 1,
                backgroundColor: backgroundColor,

            }}>

			<View style={{ flexDirection: 'row',height:60,textAlign:'center',alignItems:'center',padding:10,backgroundColor:topColor}}>

		 <Icon
						name='chevron-left'
						color='#FFFFFF'
						size={22}/>
		<Text style={{fontSize:22,color:'white',fontFamily:fontStyle,alignItems:'center',justifyContent:'center',alignSelf:'center',paddingLeft:15,textAlign:'center'}}>Survey</Text>
		</View>
               <FlatList
			   horizontal
          scrollEnabled={true}
        //  onEndReachedThreshold={10}
      //  onRefresh={true}
        onEndReachedThreshold={0.5}
onEndReached={({ distanceFromEnd }) => {
  // onEndReachedThreshold:0.5,
  if (distanceFromEnd = 0.5) {
            //call API to get next page values
          //  console.warn('on end reached ', distanceFromEnd)
            Alert.alert('LAST PAGE');
          this.setState({status: true})

        }else{
          this.setState({status: false})
        }
}}
                data={SurveyListData}
				 //ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
            {

           this.state.status ?  <TouchableOpacity >
                           <Text style={[styles.textViewStyle,{
                                         height:48,backgroundColor:'#007EA7',marginTop:30,color:'white',
                                         justifyContent:'center',alignItems:'center',textAlign: 'center',
                                        overflow: 'hidden',paddingTop:10,fontSize:18
                               }]}>
                                         Submit
                           </Text>
                         </TouchableOpacity>: null
           }

            </View>

        </View>);
    }
}
const styles = StyleSheet.create({
	container: {
    flex: 1,
	justifyContent:'center',
    backgroundColor: '#FFFFFF',
  },
  infoContainer:
  {
	justifyContent:'center',
	alignSelf:'center'

  },
  textViewStyle:{

   fontSize:16,

   color:'#575757'
 },
    flatListItem: {

        padding: 10,
        fontSize: 16,

    },
	inputNew: {
    //   marginTop: 15,
	  // marginLeft:20,
	  // marginRight:20,
	  // marginBottom:10,
    // borderColor: '#ff4d2e',
    //   borderWidth: 1,
	  //  color: '#000000'

	width:Dimensions.get('window').width-50,
	marginLeft:10,
	height: 40,
      borderColor: '#B6B6B6',
      borderWidth: 1,
	   color: '#000000',
	   alignItems:'center',
     //alignItems: 'center'
     //alignSelf: 'center'
     paddingLeft: 10,
    //justifyContent: 'center'

   },
	textName:{
		color:'black',
		paddingLeft:12,
		marginBottom:4,
		fontSize:16,
		marginLeft:5,
	},
	textDescription:{
		color:'grey',

		marginBottom:5,
		marginLeft:15,
		fontSize:14
	},
});
