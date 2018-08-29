import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import  fire from './Fire'
import Home from './Home'
import Profile from './Profile'
import Login from './Login'
//import Profile  from './src/containers/Profile';


export default class Loading extends React.Component {

    componentDidMount(){
      fire.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'BottomNav' : 'Login')
      })
    }
    

    render() {
      return (
        <View>
        <Text>Loading</Text>
        </View>
      );
    }
}
