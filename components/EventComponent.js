import React, { Component } from 'react';
import { View, FlatList,Text,StyleSheet, StatusBar,Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
const backgroundColor = '#3eb5e8';
import HeaderComponent from './HeaderComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import EventListData from '../data/EventListData';

class FlatListItem extends React.Component {
	
 
  
    render() {          
        return (
	
		   <View style={{marginBottom:5,width:undefined,flexDirection:'column',alignItem:'center',backgroundColor: '#FFFFFF',borderBottomWidth:1,borderBottomColor:'#ECECEC',paddingTop:8,paddingLeft:12,paddingRight:12,paddingBottom:15,justifyContent:'flex-start'}}>
				<StatusBar
                    backgroundColor="#3eb5e8"
                    barStyle="light-content"/>   
				
						
					
					<View style={{
						flex: 1,
						flexDirection: 'row',
						backgroundColor: '#ffffff',}}>
			
			<View style={styles.CircleShapeView}>
			 <Text style={styles.circleText}>
                 AB
               </Text>
			</View>	
			
		
				<View style={{
                flex: 1,
                backgroundColor: '#ffffff',}}> 	
				
						
					<Text style={styles.textNameTitle}>{this.props.item.EventName}</Text>
					
						<View style={{
							flex: 1,
							flexDirection: 'row',
							backgroundColor: '#ffffff',}}>
								<Text style={styles.textName}>{this.props.item.EventDate}</Text>
								<Text style={styles.textType}>{this.props.item.EventType}</Text>
						</View>
					
			  
				</View>
				
				
			</View>	
			 
          </View>
        );
    }
}


const FirstRoute = () => (
   <View style={{
                flex: 1,
                backgroundColor: '#ffffff',
               
            }}>
               <FlatList 
                data={EventListData}
				
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


const SecondRoute = () => (
 <View style={{
                flex: 1,
                backgroundColor: '#ffffff',
               
            }}>
               <FlatList 
                data={EventListData}
				
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

export default class EventComponent extends React.Component {
	
 static navigationOptions = ({ navigation }) => {
		header: {
			visible: false
		}
        let drawerLabel = 'Event';
        let drawerIcon = () => (
            /*<Image
                source={require('../icons/info-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />*/
			 <Icon
		name='calendar'
		//color='#767676'
		size={18}/>
        );
        return { drawerLabel, drawerIcon };
    }


  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Older' },
      { key: 'second', title: 'Upcoming' },
	 
    ],
  };
 

  render() {
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
            <HeaderComponent title="Event" {...this.props} />  
             <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
               
            }}>
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
		  //third:SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
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
  CircleShapeView: {
    width: 50,
    height: 50,
	justifyContent:'center',
	alignSelf:'center',
    borderRadius: 50/2,
    backgroundColor: '#00BCD4'
},
OvalShapeView: {
  marginTop: 20,
  width: 100,
  height: 100,
  backgroundColor: '#00BCD4',
  borderRadius: 50,
  transform: [
    {scaleX: 2}
  ]
},
textName:{
		color:'grey',
		paddingLeft:12,
		marginBottom:4,
		fontSize:16,
		marginLeft:5,
	},
	textType:{
		color:'black',
		marginBottom:4,
		fontSize:16,
	
		marginLeft:30,
	},
	textNameTitle:{
		color:'black',
		paddingLeft:12,
		fontWeight: 'bold',
		marginBottom:4,
		fontSize:16,
		marginLeft:5,
	},
	circleText:{
	alignItems:'center',
	alignSelf:'center',
	justifyContent:'center',
    fontSize: 16,
	fontWeight: 'bold',
	color:'#ffffff'
  },
});