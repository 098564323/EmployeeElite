/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
HeaderComponent => used for both Home, Info, Cloud, Settings
*/
import React, { Component } from 'react';
import Button from 'react-native-button';
import PropTypes from 'prop-types';
import { DrawerNavigator } from 'react-navigation';
import {
    Text, Dimensions,View, StyleSheet,Image,TouchableOpacity,Platform, TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
import PopupDialog from 'react-native-popup-dialog';

export default class HeaderComponent extends Component {
	 
	 
 
    render() {
		
        return (<View style={{
           height:Platform.OS === 'ios' ? 70 : 55,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
			backgroundColor:'#007EA7'
        }}>
		<View style={{
        flex: 1,
        flexDirection: 'row',
		
		
      }}>
		
            <TouchableOpacity style={{ marginLeft: 14, marginTop: 3 }}
               onPress={() => this.props.navigation.openDrawer()}>
               <Icon
				name='bars'
				color='#ffffff'
				size={24}/>
            </TouchableOpacity>
			
				
			
			<View style={styles.ContaninerView}>
			
         <Text style={styles.ForgotText}>
			 {this.props.title}
		
        </Text>
 
  </View>
        
		
		
               <Icon
		name={this.props.rightIcon}
		color='#ffffff'
		size={24}/>
		
          
		
			</View>
        </View>);
    }
}

HeaderComponent.proptypes = {
	title : PropTypes.String,
	rightIcon : PropTypes.String,
}
const styles = StyleSheet.create({
	ForgotText:{
	 width:Dimensions.get('window').width-70,
	textAlign:'center',
	alignSelf:'center',
    fontSize:18,
	marginTop:2,
	fontFamily:fontBtnStyle,
	justifyContent:'center',
	color:'#ffffff',
  },
  ContaninerView:{
	  justifyContent:'center',
	  alignItems:'center',
	  alignSelf:'center'
  },
});
