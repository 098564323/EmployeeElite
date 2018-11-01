import React from 'react';
import {
  AppRegistry,ScrollView,StatusBar,Alert,Dimensions,Platform,StyleSheet,Text, View, FlatList,Image,TouchableOpacity, TouchableHighlight
} from 'react-native';

import ExpandableList from 'react-native-expandable-section-flatlist';
import MockData from '../constants/mockData';
import DictStyle from '../constants/dictStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';
const topColor = '#007ea7';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
import Util from '../Utils/Util';
import Swipeout from 'react-native-swipeout';
import HeaderComponent from './HeaderComponent';
import annoucmentData from '../data/annoucmentData';

import Collapsible from 'react-native-collapsible';

export default class Test extends React.PureComponent {


constructor(){
    super()
    this.state={
      status:false,
    isHidden: false,
            }


   this.data = [
     {icon: 'home', heading: 'Event 1'},
     {icon: 'lock', heading: 'Event 2'},
     {icon: 'filter', heading: 'Event 3'},
     {icon: 'calendar', heading: 'Event 4'},

   ],
   this.swipeBtns = [
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
              }} >
                <View
                    style={{
                      flex: 1,

                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      backgroundColor:topColor
                    }}>

           <Icon
              name='check-circle-o'
              color='#FFFFFF'
              size={18}/>


        </View>
    </TouchableOpacity>

     <TouchableOpacity style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor:'#035c79'}} >
              <View style={{
                  flex: 1,
                  height:60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  backgroundColor:'#035c79'}}>

            <Icon
              name='times-circle-o'
              color='#FFFFFF'
              size={18}/>
            </View>
    </TouchableOpacity>
  </View>
      ),
   backgroundColor:'transparent',
      underlayColor: 'white',

    },

  ];

  }




 goToNextScreen = () => {
         this.props.navigation.navigate('Seventh')
		 //Alert.alert('SUCCESS');
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

  _renderRow = (rowItem, rowId, sectionId) => (


  //console.log('STATUS IS == '+sectionId),
<View>
{  (sectionId==3) ?

        <View style={styles.container}>

    <CardView

    marginLeft={50}
    marginRight={20}

   cornerRadius={5}>


    <View style={{
          flex: 1,
          padding:13,
          flexDirection: 'row',
          backgroundColor: 'white',}}>

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
            <Text style={styles.textName}>{rowItem.title}</Text>

     <View style={{flexDirection:'row'}}>
            <Text style={styles.textDescription}>{rowItem.date}</Text>
            <Text style={styles.textDescription2}>{rowItem.anchor}</Text>
      </View>





      </View>

     <TouchableOpacity  key={rowId} onPress = { this.ShowHideTextComponentView }>
      <View style={{alignItems:'center',justifyContent:'center',padding:10}}>
        {this.state.isHidden ?  <Icon

      color='#949494'
      size={0}/>: null}

     <Icon
      name={this.state.isHidden ? "angle-up" : "angle-down"}
      color='#949494'
      size={0}/>


      </View>
              </TouchableOpacity>
      </View>

      </CardView>
        </View>
:

    <Swipeout

    right={this.swipeBtns}
          autoClose="true"
    style={{marginBottom:10,marginTop:2}}
          backgroundColor="transparent">

     <TouchableOpacity key={rowId} onPress={()=>{
       let utilObject = Util.getInstance();
         //
       utilObject.getNavData().navigate("Seventh");

          }}>


          <View style={styles.container }>


		  	<View style={{

							marginLeft:5,
							paddingBottom:10,
							padding:0,
							 width:Dimensions.get('window').width,
							alignItems:'flex-start',
							alignSelf:'flex-start',
							backgroundColor: 'white',}}>



			<CardView
			  marginLeft={40}

			  cardElevation={2}
			  cardMaxElevation={2}
			  cornerRadius={5}
			  >


			  <View style={{

							width:Dimensions.get('window').width-60,

							backgroundColor: 'white',
							}} >

					<View style={{alignItems:'center',flexDirection:'row'}}>
					<View style={{alignItems:'center',marginLeft:10,marginBottom:5}}>

					<Icon
					name='calendar-check-o'
					color='#007ea7'
					size={18}/>
					</View>
			<View style={{alignItems:'center',flexDirection:'column'}}>

			<Text style={styles.textName}> {rowItem.title}</Text>

			  <View style={{flexDirection:'row'}}>
              <Text style={styles.textDescription}>{rowItem.anchor}</Text>
			   <Text style={styles.textDescription2}>{rowItem.description}</Text>

             </View>

			  </View>
			  </View>
			 </View>

			  </CardView>

			 </View>

		</View>
		</TouchableOpacity>

    </Swipeout>
}
</View>

  );

  _renderSection = (section, sectionId)  => {
  //  console.warn('Value iS = '+{section});
  var a = ['calendar','calendar-check-o' , 'comment-o', 'bullhorn']
    var title = ['My Session','Upcoming Event' , 'Pending Feedback', 'Annoucment'],

b = a.map(function(key, val, array){
        return key ;
    });
console.log(b);

    return (

	<CardView

			  cardElevation={2}
			  cardMaxElevation={2}
			  cornerRadius={0}
        style={{

            	backgroundColor: 'white' }}>

      <View
        style={{ marginVertical: 10,backgroundColor:'white', height: 40, flexDirection: 'row',
          justifyContent: 'center',alignItems:'center',alignSelf:'center', borderBottomWidth: 0.5,
          borderBottomColor: 'white'}}>

        <Icon

      name={a[sectionId]}
      color='#007ea7'
      size={18}/>



        <View   style={{ flexDirection: 'row', width:Dimensions.get('window').width-90,marginLeft:10,alignItems: 'center' ,alignSelf:'center'}}>
          <Text style={{ fontSize: 16, color: '#515050' }}>
{title[sectionId]}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Icon
		name='plus'
		color='#007ea7'
		size={18}/>
        </View>
      </View>
	  </CardView>
    );
  };
  componentDidMount(){
    //  Alert.alert("Navigation :: "+this.props.navigation);
      var utilObject = Util.getInstance();
      utilObject.setNavData(this.props.navigation);
      console.warn('icon is= '+this.data.icon);
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

  render() {

    return (

      <View style={{
          flex: 1,
          flexDirection: 'column',
      }}>
      <StatusBar
                  backgroundColor="#035c79"
                  barStyle="light-content"
              />
          <HeaderComponent title="DashBoard" rightIcon="" {...this.props}
              />
      <ExpandableList

        dataSource={MockData.workbenchData}
        //dataSource={this.data}
	//	   data={this.props.item}
		    backgroundColor='white'
        headerKey="title"

        memberKey="member"
        renderRow={this._renderRow}
        renderSectionHeaderX={this._renderSection}


      />
      </View>


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
  textDate:{

		paddingLeft:12,
		color:'#515050',
		marginBottom:12,
		fontSize:16,
		marginTop:10,
		alignItems:'center',
		alignSelf:'flex-start',
		//backgroundColor:'red',
		fontFamily:fontStyle,
		color:'#035c79',
		//backgroundColor:'red',
		marginLeft:10,
	},
	textName:{

		paddingLeft:12,
		color:'#515050',
		marginBottom:5,
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
		marginLeft:20,
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
