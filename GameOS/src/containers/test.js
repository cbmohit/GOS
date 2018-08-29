onFocus = { () => this.setState({email: ""})}

onFocus = { () => {
    this.setState({password: ""});
    this.setState({errorMessage: "Password must contain symbols, uppercase and at least 8 characters length"})}}
secureTextEntry = {true}

try{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.state.email.length < 3){
      alert("Email can't be empty");
      return;
    }
    if(reg.test(this.state.email) === false){
      alert("Invalid email");
      return;
    }
    if(this.state.password.length < 1){
      alert("Password can't be empty");
      return;
    }
}
catch (error){
  alert(error.toString());
}

fire.auth()
.createUserWithEmailAndPassword(this.state.email, this.state.password)
.then(() => alert('success'))
.catch(err => {this.setState({errorMessage: err.message})})


AsyncStorage.getItem('user').then((userJsonData) => {
  let userData = JSON.parse(userJsonData);
  this.setState({
    user: userData
  })
});


import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
//import Profile  from './src/containers/Profile';
import Fire from './Fire'
import Home from './Home'
import Profile from './Profile'

export default createMaterialBottomTabNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  }
})
