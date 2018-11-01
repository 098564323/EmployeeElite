import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  StatusBar,
  FlatList,
  Alert,
  Image,
    Picker ,
  TouchableOpacity,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import flatListData from '../data/flatListData';
import CardView from 'react-native-cardview';
const textColor='#515050';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
const fontStyle='OpenSans-Regular';
const fontBtnStyle='OpenSans-Semibold';
const topColor = '#007ea7';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Not at all interesting', 'Needs improvement', 'Interesting','Highly interesting','Interesting and engaging','Other']


class FlatListItem extends React.Component {

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

           </View>        );
    }
}

const styles = StyleSheet.create({
  wrapper: {
    height:undefined,
    flexGrow:5

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  searchInput: {
    alignItems:'center',
  alignSelf: 'center',

  marginTop:10,
   fontSize:13,
  textAlign:'center',
  alignSelf:'center',
  marginLeft:10,
  color:'#949494',
  fontFamily:fontStyle,
  //marginRight:30,
  marginBottom:15,
  flexGrow: 1,



},
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
  marginLeft:34,
  height: 40,
  width:Dimensions.get('window').width-78,
  alignItems:'center',
  textAlign:'center',
  marginTop:15,
  fontFamily:fontStyle,
  borderWidth: 1,
  borderColor: '#949494',
  borderRadius: 0,
  // backgroundColor:'#000000',
},
  input: {
  	 width:Dimensions.get('window').width-76,
  	marginTop:10,
  	  marginLeft:40,
  	  marginRight:20,
  	  paddingLeft:10,
        height: 40,
  	  fontFamily:fontStyle,
        borderColor: '#949494',
        borderWidth: 1,
  	   color: '#949494'
     },
  viewStyle:{

    textAlign:'center',
    alignSelf:'center',
    justifyContent:'center',
  }
})

export default class Slider extends React.Component {
  swiper:Object;
  currentIndex:number;
  constructor(){

        super();


      this.state={
        ViewArray: [
              {status: '4',Qus:'Question 1' ,title:'Were all required facilities available at the venue?',heading: 'Event 1'},
              {status: '4', Qus:'Question 2' ,title:'Was the session calendar planned and communicated well ahead to help you prioritize your work accordingly?',heading: 'Event 1'},
              {status: '6', Qus:'Question 3' ,title:'Was the session topic interesting and engaging? Please rate it accordingly.',heading: 'Event 1'},
              {status: '4',Qus:'Question 4' ,title:'Was the session duration sufficient?',heading: 'Event 1'},
              {status: '2',Qus:'Question 5' ,title:'Was the session content interesting and engaging? Please rate it.',heading: 'Event 1'},
              {status: '3', Qus:'Question 6' ,title:'Was the facilitator interesting and effective during the session? Please rate accordingly.',heading: 'Event 1'},
              {status: '5',Qus:'Question 7' ,title:'Do you prefer more such sessions?', heading: 'Event 1'},
              {status: '1',Qus:'Question 8' ,title:'Any other comments:', heading: 'Event 1'}






                ],
            PickerValueHolder : '',
            PickerValueHolderNew:'',
            selectedFruits: [],
            index:0,
    //selectedFruits: []

     }
  }
  GetSelectedPickerItem=()=>{

    Alert.alert(this.state.PickerValueHolder);
  }
  GetSelectedPickerItemNew=()=>{

    Alert.alert(this.state.PickerValueHolderNew);
  }

    handleOnMomentumScrollEnd(e, state) {
   this.setState({
     index: state.index
   });
 }
    onSelect(index, value){
  this.setState({
    text: 'Selected index: ${index} , value: ${value}'
  })
}

onSelectYesNo(index, value){
this.setState({
textYesNo: 'Selected index: ${index} , value: ${value}'
})
}
componentWillReceiveProps(nextProps) {
if (this.currentIndex > 0) {
console.log('INDEX IS =='+this.currentIndex); //offset
}
}
_onMomentumScrollEnd(e, state, context) {
this.currentIndex = state.index;
this.currentIndex = this.state.index;
console.log('INDEX SIZE IS =='+this.state.index);
}

onSelectionsChange = (selectedFruits) => {
   // selectedFruits is array of { label, value }
   this.setState({ selectedFruits })
 }
 NavigateToBackScreen=()=>
 {
	   this.props.navigation.goBack();
 }

  render(){
    //const fruits = ['Apples', 'Oranges', 'Pears']
    let Render_Animated_View = this.state.ViewArray.map(( item,index  ) =>
       {
          //console.warn('VALUE IS = '+key);
          if(item.status == 1){
            ///console.warn('INSIDE');
            return(
            <View  key={index} style={{backgroundColor:'white',height:undefined,flexGrow:9.7}}>


          <View style={{backgroundColor:'white',justifyContent:'flex-end',marginLeft:44,marginBottom:20,height:undefined,flexGrow:0.6,alignItem:'center'}}>
              <Text style={{color:textColor,fontSize:16,marginBottom:30,fontFamily:fontBtnStyle}}>{item.Qus}</Text>
              <Text style={{color:textColor,fontSize:16}}>{item.title}</Text>

          </View>
          <View style={{backgroundColor:'white',justifyContent:'flex-start',height:undefined,flexGrow:1.4}}>
          <AutoGrowingTextInput
            underlineColorAndroid = "transparent"
            value={this.state.textValue}
            //onChange={(event) => this._onChange(event)}
            style={styles.input}
            placeholder={'Your Message'}
            placeholderTextColor='#B6B6B6'
            maxHeight={200}
            minHeight={45}
            enableScrollToCaret
          //  ref={(r) => { this._textInput = r; }}
          />
          </View>


            </View>
          );
          }else if(item.status == 2){
              return(
            <View  key={index} style={{backgroundColor:'white',height:undefined,flexGrow:9.7}}>
            <View style={{backgroundColor:'white',justifyContent:'flex-end',marginLeft:44,marginBottom:20,height:undefined,flexGrow:0.6,alignItem:'center'}}>
                <Text style={{color:textColor,fontSize:16,marginBottom:30,fontFamily:fontBtnStyle}}>{item.Qus}</Text>
                <Text style={{color:textColor,fontSize:16}}>{item.title}</Text>

            </View>
              <View style={{backgroundColor:'white',justifyContent:'flex-start',height:undefined,flexGrow:1.4}}>
                  <View style={styles.flowRight}>
                          <Picker
                              style={styles.searchInput}
                               selectedValue={this.state.PickerValueHolder}
                               onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
                               <Picker.Item label="Choose" value="" />
                               <Picker.Item label="Not at all interesting" value="Not at all interesting" />
                               <Picker.Item label="Needs improvement" value="Needs improvement" />
                               <Picker.Item label="Interesting" value="Interesting" />
                               <Picker.Item label="Highly interesting" value="Highly interesting" />
                               <Picker.Item label="Interesting and engaging" value="Interesting and engaging" />


                          </Picker>
                  </View>


              </View>


            </View>
          );
          }else if(item.status == 3){
              return(
            <View  key={index} style={{backgroundColor:'white',height:undefined,flexGrow:9.7}}>
            <View style={{backgroundColor:'white',justifyContent:'flex-end',marginLeft:44,marginBottom:20,height:undefined,flexGrow:0.6,alignItem:'center'}}>
                <Text style={{color:textColor,fontSize:16,marginBottom:30,fontFamily:fontBtnStyle}}>{item.Qus}</Text>
                <Text style={{color:textColor,fontSize:16}}>{item.title}</Text>

            </View>

              <View style={{backgroundColor:'white',justifyContent:'flex-start',height:undefined,flexGrow:1.4}}>
              <View style={{
                width:Dimensions.get('window').width-76,
                 	    marginTop:10,
                 	    marginLeft:40,
                 	    marginRight:20,
                 	    //paddingLeft:10,
                      flexDirection: 'row',
                       alignItems: 'center',
                 	    fontFamily:fontStyle,
                      borderColor: '#949494',
                      borderWidth: 1,
                 	    color: '#949494'}}>
                       <SelectMultiple
                         items={fruits}
                         //renderLabel={renderLabel}
                         checkboxSource={require('../icons/check-box-empty.png')}
                         selectedCheckboxSource={require('../icons/check.png')}
                         selectedItems={this.state.selectedFruits}
                         onSelectionsChange={this.onSelectionsChange} />
                   </View>
              </View>
            </View>
          );
        }else if(item.status == 4){
              return(
            <View  key={index} style={{backgroundColor:'white',height:undefined,flexGrow:9.7}}>
            <View style={{backgroundColor:'white',justifyContent:'flex-end',marginLeft:44,marginBottom:20,height:undefined,flexGrow:0.6,alignItem:'center'}}>
                <Text style={{color:textColor,fontSize:16,marginBottom:30,fontFamily:fontBtnStyle}}>{item.Qus}</Text>
                <Text style={{color:textColor,fontSize:16}}>{item.title}</Text>

            </View>
              <View style={{backgroundColor:'white',justifyContent:'flex-start',height:undefined,flexGrow:1.4}}>
              <View style={{
                width:Dimensions.get('window').width-76,
                      marginTop:10,
                      marginLeft:40,
                      marginRight:20,
                      //paddingLeft:10,
                      flexDirection: 'row',
                       alignItems: 'center',
                      fontFamily:fontStyle,
                      borderColor: '#949494',
                      borderWidth: 1,
                      color: '#949494'}}>
              <RadioGroup
                 color='#007ea7'
  //highlightColor='#ccc8b9'
        onSelectYesNo = {(index, value) => this.onSelectYesNo(index, value)}
      >
        <RadioButton value={'Yes'} >
          <Text style={{marginLeft:10}}>Yes</Text>

        </RadioButton>

        <RadioButton value={'No'}>
          <Text style={{marginLeft:10}}>No</Text>
        </RadioButton>

      </RadioGroup>
      </View>

              </View>
            </View>
          );
        }else if(item.status == 5){
            ///console.warn('INSIDE');
            return(
            <View  key={index} style={{backgroundColor:'white',height:undefined,flexGrow:9.7}}>


          <View style={{backgroundColor:'white',justifyContent:'flex-end',marginLeft:44,marginBottom:20,height:undefined,flexGrow:0.6,alignItem:'center'}}>
              <Text style={{color:textColor,fontSize:16,marginBottom:30,fontFamily:fontBtnStyle}}>{item.Qus}</Text>
              <Text style={{color:textColor,fontSize:16}}>{item.title}</Text>

          </View>
          <View style={{backgroundColor:'white',justifyContent:'flex-start',height:undefined,flexGrow:1.4}}>
          	<View style={styles.flowRight}>
                <Picker
           		    style={styles.searchInput}
                   selectedValue={this.state.PickerValueHolder}
                   onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
           		     <Picker.Item label="Choose" value="" />
                   <Picker.Item label="Not recommended" value="Not recommended" />
                   <Picker.Item label="Needs improvement" value="Needs improvement" />
                   <Picker.Item label="Recommended" value="Recommended" />
                   <Picker.Item label="Highly Recommended" value="Highly Recommended" />
                   <Picker.Item label="Highly Recommended with changes" value="Highly Recommended changes" />

                  </Picker>
            </View>
          </View>
        </View>
          );
        }else if(item.status == 6){
                return(
              <View  key={index} style={{backgroundColor:'white',height:undefined,flexGrow:9.7}}>
              <View style={{backgroundColor:'white',justifyContent:'flex-end',marginLeft:44,marginBottom:20,height:undefined,flexGrow:0.6,alignItem:'center'}}>
                  <Text style={{color:textColor,fontSize:16,marginBottom:30,fontFamily:fontBtnStyle}}>{item.Qus}</Text>
                  <Text style={{color:textColor,fontSize:16}}>{item.title}</Text>

              </View>
                <View style={{backgroundColor:'white',justifyContent:'flex-start',height:undefined,flexGrow:1.4}}>
                <View style={{
                  width:Dimensions.get('window').width-76,
                        marginTop:10,
                        marginLeft:40,
                        marginRight:20,
                        //paddingLeft:10,
                        flexDirection: 'row',
                         alignItems: 'center',
                        fontFamily:fontStyle,
                        borderColor: '#949494',
                        borderWidth: 1,
                        color: '#949494'}}>
                <RadioGroup
                   color='#007ea7'
    //highlightColor='#ccc8b9'
          onSelect = {(index, value) => this.onSelect(index, value)}
        >
        <RadioButton value={'Not at all interesting'} >
               <Text style={{marginLeft:10}}>Not at all interesting</Text>

             </RadioButton>

             <RadioButton value={'Needs improvement'}>
               <Text style={{marginLeft:10}}>Needs improvement</Text>
             </RadioButton>

             <RadioButton value={'Interesting'}>
               <Text style={{marginLeft:10}}>Interesting</Text>
             </RadioButton>

             <RadioButton value={'Highly interesting'}>
               <Text style={{marginLeft:10}}>Highly interesting</Text>
             </RadioButton>

             <RadioButton value={'Interesting and engaging'}>
               <Text style={{marginLeft:10}}>Interesting and engaging</Text>
             </RadioButton>

             <RadioButton value={'Other'}>
               <Text style={{marginLeft:10}}>Other</Text>
             </RadioButton>

        </RadioGroup>


        </View>

                </View>
              </View>
            );
          }
          else{
            null
          }
          //console.warn('VALUE IS = '+item.status);
       });



    return (


      <View style={{flex:1,width:Dimensions.get('window').width,
        height:Dimensions.get('window').height}}>
      <TouchableOpacity onPress={this.NavigateToBackScreen}>
      <View style={{backgroundColor:topColor,height:45,flexDirection: 'row',marginLeft:0,textAlign:'left',alignItems:'center',padding:15}}>
      <Icon
             name='chevron-left'
             color='#FFFFFF'
             size={20}/>

     <Text style={{fontSize:18,color:'white',fontFamily:fontStyle,alignItems:'center',justifyContent:'center',alignSelf:'center',textAlign:'center',paddingLeft:15}}>Being Proactive</Text>
      </View>
      </TouchableOpacity>
      <View style={{flexGrow:9.5,height:undefined,backgroundColor:'white'}}>
              <Swiper ref={component => this.swiper = component} onMomentumScrollEnd = {this._onMomentumScrollEnd.bind(this)} style={styles.wrapper}  showsButtons={false}loop={false} scrollEnabled={false}activeDotStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: 'transparent' }} dotStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: 'transparent' }}>
            {
              Render_Animated_View
            }


          </Swiper>
      </View>


      <View style={{flexDirection:'row',flexGrow:0.5,height:undefined,backgroundColor:'#757575',alignItem:'center',justifyContent:'center',textAlign:'center'}}>

  <TouchableOpacity style={{width:undefined,flexGrow:1,backgroundColor:'#757575',alignItem:'center',textAlign:'center',justifyContent:'center'}} onPress={() => this.swiper.scrollBy( -1)} >
            <View >

            <Text style={{color:'white',fontSize:14,alignItem:'center',textAlign:'center',justifyContent:'center'}}>Back</Text>

            </View>
              </TouchableOpacity>


    <TouchableOpacity style={{width:undefined,flexGrow:1,backgroundColor:'#007ea7',alignItem:'center',textAlign:'center',justifyContent:'center'}} onPress={() => this.swiper.scrollBy( 1)} >
            <View >

              <Text style={{color:'white',fontSize:14,alignItem:'center',textAlign:'center',justifyContent:'center'}}>Next</Text>

            </View>
              </TouchableOpacity>

        </View>
      </View>
    );
  }
}
