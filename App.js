

import React, { Component } from 'react';
import MainActivity from './Modules/MainActivity' ;
 
 
import SecondActivity from './Modules/SecondActivity' ;
 
 
import { StackNavigator } from 'react-navigation';
 
 
export default MyProject = StackNavigator(
{
 
 First: { screen: MainActivity },
 
 Second: { screen: SecondActivity }
 
});