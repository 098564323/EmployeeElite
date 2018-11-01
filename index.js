import { AppRegistry } from 'react-native';
/*import App from './App';*/
/*import Homepage from './Homepage';*/
/*import ForgotPassword from './ForgotPassword';*/
import Login from './Modules/Login' ;

import { StackNavigator } from 'react-navigation';


import ForgotPassword from './Modules/ForgotPassword';

import FeedbackForm from './Modules/FeedbackForm';
import Splash from './Modules/Splash';
import Homepage from './Modules/Homepage';
//import Notification from './Modules/Notification';

import {  Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
//Components
import HomeComponent from './components/HomeComponent';
import SurveyComponent from './components/SurveyComponent';
import FeedbackComponent from './components/FeedbackComponent';
import NotificationComponent from './components/NotificationComponent';
import EventComponent from './components/EventComponent';
import EventListComponent from './components/EventListComponent';
import EventDetail from './components/EventDetail';
import AnnoucmentComponent from './components/AnnoucmentComponent';
import LeaveComponent from './components/LeaveComponent';
import Test from './components/Test';
import TestNew from './components/TestNew';
import NewComponent from './components/NewComponent';
import Slider from './components/Slider';
import HardwareComponent from './components/HardwareComponent';

//Screen names
import { Home, Annoucment,Event,Notification,Leave, Feedback,Hardware } from './screenNames';
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: Test,
		headerVisible: false,
	   title: 'Home, sweet home!'


    },
    Annoucment: {
        path: '/info',
        screen: AnnoucmentComponent,

    },
	Event: {
        //path: '/info',
        screen: EventListComponent,

    },
    Notification: {
        screen: NotificationComponent,

    },
	   Leave: {
        screen: LeaveComponent,

    },
    Feedback: {
        screen: FeedbackComponent,


    },
    Hardware: {
        screen: HardwareComponent,


    },
};
let drawerNavigatorConfig = {
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
	drawerBackgroundColor:'#f9f9f9',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'white',
		activeBackgroundColor: '#1c93ba',
		inactiveTintColor: '#757575',
		activeTintColor: 'white',
    },
    order: [Home, Annoucment,Event,Notification,Leave,Feedback,Hardware ]
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent('IcreativeEmployeeElite', () => IcreativeEmployeeElite);

const IcreativeEmployeeElite = StackNavigator(
{
	First:{screen:Splash},

	Second: { screen: Login },

	Third: { screen: ForgotPassword },

	Fourth:{ screen:FeedbackForm },

	Fifth:{screen:Homepage},

	Seventh:{screen:EventDetail},

	Eight:{screen:Slider},


	Sixth:{
		screen:App,
		navigationOptions: ({navigation}) => ({
      header: null,
	  headerMode: 'none'

    }),
	},






}, { headerMode: 'none'
	 },
	 {
    portraitOnlyMode: true
}

);
