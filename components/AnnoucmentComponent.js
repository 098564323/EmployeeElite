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
    AppRegistry,StatusBar,Platform,TouchableOpacity,StyleSheet,Text, View, FlatList,Image, TouchableHighlight
} from 'react-native';

import annoucmentData from '../data/annoucmentData';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';
const backgroundColor = '#FFFFFF';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
//import CollapseView from "react-native-collapse-view";
import Collapsible from 'react-native-collapsible';

class FlatListItem extends React.Component {

	 constructor(){

    super();

    this.state ={

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

	 _renderIconView = (collapse) => {
    return(
      <View style={styles.iconView}>

        <View>
          {
            collapse?
             <Icon
				name='angle-up'
				color='#949494'
				size={20}/>:
              <Icon
				name='angle-down'
				color='#949494'
				size={20}/>
          }
        </View>
      </View>
    )
  }

  _renderCollapseView = (collapse) => {
    return(
      <View style={styles.collapseView}>
        <Text>Hello</Text>
      </View>
    )
  }

    render() {
        return (

          <View style={styles.container}>

			<CardView

		  marginLeft={10}
		  marginRight={10}

          cornerRadius={5}>


			<View style={{
						flex: 1,
						padding:13,
						flexDirection: 'row',
						backgroundColor: '#FFFFFF',}}>

			<View style={{

						marginLeft:5,
						alignItems:'center',
						alignSelf:'center'
						}}>
			<View style={styles.CircleShapeView}>
				<View style={styles.circleText}>
			  <Icon
				name='calendar'
				color='#ffffff'
				size={20}/>
				</View>
			</View>
			</View>

			<View style={{
							flex: 1,
							marginLeft:5,
							alignItems:'flex-start',
							textAlign:'center',
							backgroundColor: '#ffffff',}}>
              <Text style={styles.textName}>{this.props.item.name}</Text>

			 <View style={{flexDirection:'row'}}>
              <Text style={styles.textDescription}>{this.props.item.foodDescription}</Text>
              <Text style={styles.textDescription2}>{this.props.item.person}</Text>
			  </View>
			   {

				this.state.status ?  <Text style={styles.textDescription}>{this.props.item.description}</Text>: null
			  }




			  </View>

			 <TouchableOpacity  onPress = { this.ShowHideTextComponentView }>
				<View style={{alignItems:'center',justifyContent:'center',padding:10}}>
				 
			 <Icon
				name={this.state.isHidden ? "angle-up" : "angle-down"}
				color='#949494'
				size={20}/>


				</View>
							  </TouchableOpacity>
			  </View>

			  </CardView>
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
    flatListItem: {

        padding: 10,
        fontSize: 16,

    },
	 CircleShapeView: {
    width: 40,
    height: 40,
	justifyContent:'center',
	alignSelf:'center',
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
	textName:{
		paddingLeft:12,
		color:'#515050',
		marginBottom:10,
		fontSize:16,
		fontFamily:fontBtnStyle,
		//backgroundColor:'red',
		marginLeft:5,
	},
	textDescription:{
		color:'#515050',
		marginBottom:10,
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
	collapseView: {

    padding: 20
  },
  iconView: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#ffffff',
  },
});


export default class AnnoucmentComponent extends Component {

    static navigationOptions = ({ navigation }) => {
		header: {
visible: false
}
        let drawerLabel = 'Annoucment';
        let drawerIcon = () => (
            /*<Image
                source={require('../icons/cloud-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />*/
			 <Icon
		name='bullhorn'
		//color='#767676'
		size={18}/>
        );
        return { drawerLabel, drawerIcon };
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
            <HeaderComponent title="Annoucment" {...this.props} />

            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,

            }}>
               <FlatList
                data={annoucmentData}

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
