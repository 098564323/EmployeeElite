import React, { Component } from 'react';
import { AppRegistry, FlatList,StatusBar, Platform,
  StyleSheet, Text, View } from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends React.Component {
	
	static navigationOptions =
 {
   
title: 'Notification',
	headerTintColor: 'white',
 headerStyle: {
            backgroundColor: '#ff4d2e',
			color:'white'
        },
		 headerTitleStyle: {
            color: '#fff',
        },	
		
	
 };
 
 FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'grey',
        }}
      />
    );
  }
 
  
    render() {          
        return (
		
         <View style={styles.container}>
 <StatusBar
                    backgroundColor="#ff4d2e"
                    barStyle="light-content"
                />          
              <Text style={styles.textName}>{this.props.item.name}</Text>
              <Text style={styles.textDescription}>{this.props.item.foodDescription}</Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
    flatListItem: {
       
        padding: 10,
        fontSize: 16,  
		
    },
	textName:{
		color:'black',
		padding:10,
		fontSize:16,
		marginLeft:5,
	},
	textDescription:{
		color:'grey',
		marginTop:2,
		marginLeft:15,
		fontSize:14
	},
});


export default class Notification extends Component {
    render() {
      return (
        <View style={{flex: 1, marginTop: 0}}>
            <FlatList 
                data={flatListData}
				 ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
        </View>
      );
    }
}