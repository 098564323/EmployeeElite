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
    AppRegistry,StatusBar,Platform,StyleSheet,Text, View, FlatList,Image, TouchableHighlight
} from 'react-native';

import flatListData from '../data/flatListData';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';
const backgroundColor = '#FFFFFF';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';


class FlatListItem extends React.Component {
	
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
				name='bell-o'
				color='#ffffff'
				size={24}/>
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
              <Text style={styles.textDescription}>{this.props.item.foodDescription}</Text>
			  </View>
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
});


export default class NotificationComponent extends Component {
    static navigationOptions = ({ navigation }) => {
		header: {
visible: false
}
        let drawerLabel = 'Notification';
        let drawerIcon = () => (
            /*<Image
                source={require('../icons/cloud-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />*/
			 <Icon
		name='bell'
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
            <HeaderComponent title="Notification" {...this.props} />  
			
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
               
            }}>
               <FlatList 
                data={flatListData}
				
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
