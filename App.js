// //This is an example code to pass values between two screens using React Navigator// 
// import React, { Component } from 'react';
// //import react in our code. 
// //For react-navigation 3.0+
// //import { createAppContainer, createStackNavigator } from 'react-navigation';
// //For react-navigation 4.0+
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';

// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// //import all the screens we are going to switch 
// const App = createStackNavigator({
//   //Constant which holds all the screens like index of any book 
//     FirstPage: { screen: FirstPage }, 
//     //First entry by default be our first screen 
//     //if we do not define initialRouteName
//     SecondPage: { screen: SecondPage }, 
//   },
//   {
//     initialRouteName: 'FirstPage',
//   }
// );
// export default createAppContainer(App);



import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import screen from 'react-native-screens'

import login from './Login_dashboard/login.js';
import dashboard from './Login_dashboard/dashboard.js';
import CompanyRegistration from './Login_dashboard/CompanyRegistration.js';
//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    login: { screen: login }, 
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    CompanyRegistration: { screen: CompanyRegistration }, 
    // RegCompform: { screen: RegCompform }, 
  },
  {
    initialRouteName: 'login',
  }
);
export default createAppContainer(App);
