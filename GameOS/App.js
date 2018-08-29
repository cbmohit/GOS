import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login  from './src/containers/Login';
import Profile  from './src/containers/Profile';
import Signup  from './src/containers/Signup';
import Home  from './src/containers/Home';
import MyContests  from './src/containers/MyContests';
import  fire from './src/containers/Fire'
import  Loading from './src/containers/Loading'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const BottomNav = createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      headerLeft: null,
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color = {tintColor} size={24}/>
      )
    }
  },
  MyContests: {
    screen: MyContests,
    navigationOptions: {
      headerLeft: null
    }
  },
  'My Account': {
    screen: Profile,
    navigationOptions: {
      headerLeft: null,
      tabBarLabel: 'My Account',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" color = {tintColor} size={24}/>
      )
    }
  }
},
{
  initialRouteName: 'Home',
  order: ['Home','MyContests','My Account'],
  activeTintColor: 'white',
  navigationOptions: {
    headerLeft: null
  }
});

const Application = createStackNavigator({

  Loading: {
    screen: Loading,
    navigationOptions: {
      //header: false,
      title: 'Loading',
      headerStyle: {
        backgroundColor: '#2874A6'
      }
    }
    //headerBackTitleVisible: true
 },
  Login: {
    screen: Login,
    navigationOptions: {
      //header: false,
      headerLeft: null,
      title: 'LOG IN',

      headerStyle: {
        backgroundColor: '#2874A6'
      }
    }
    //headerBackTitleVisible: true
 },
 Profile: {
   screen: Profile,
   navigationOptions: {
     //header: false,
     title: 'Profile',
     headerStyle: {
       backgroundColor: '#2874A6'
     }
   }
 },
 Signup: {
   screen: Signup,
   navigationOptions: {
     //header: false,
     title: 'Sign Up',
     headerStyle: {
       backgroundColor: '#2874A6'
     }
   }
 },
 BottomNav: {
   screen: BottomNav,
   navigationOptions: {
     headerLeft: null
   }
 }
});

export default class App extends React.Component {

  render() {
    return (
      //<Image source={require('./Images/homeBackground.jpg')} style={styles.container}/>
      <Application/>
    );
  }
}
