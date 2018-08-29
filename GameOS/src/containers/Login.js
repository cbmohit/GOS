import React from 'react';
import { StyleSheet, Button, Text, View, Image, AppRegistry, TextInput, Input, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import Profile  from './Profile';
import Signup  from './Signup';
import Home  from './Home';
import Fire  from './Fire';

export default class Login extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
  }
/*
  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if(value !== null){
      this.props.navaigation.navigate('Profile');
    }
  }
*/
  render() {
    return (
        <KeyboardAvoidingView behavior = 'padding' style= {styles.wrapper}>
          <View style = {styles.container}>
            <Text style = {styles.header}> - LOGIN - </Text>

            <TextInput style={styles.textInput} placeholder = 'Email'
              onChangeText = {(email) => this.setState({email})}
              underlineColorAndroid = 'transparent'
              keyboardType = "email-address"
              autoCapitalize = "none"
              />
            <TextInput style={styles.textInput} placeholder = 'Password'
              onChangeText = {(password) => this.setState({password})}
              underlineColorAndroid = 'transparent'
              secureTextEntry = {true}
            />

            <TouchableOpacity style={styles.btn}
              onPress= {this.login}>
              //title="Go to Details"
              //onPress = { () => this.props.navigation.navigate('Profile') }>
              <Text style = {styles.btn_text}>LOG IN</Text>

            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}
              onPress= {this.signup}> Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
    );
  }

  login = () => {
    //alert('Login Successfull');
    const {email, password} = this.state
    Fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(() => this.props.naigation.navigate('Main'))
    .catch((error) => {
      if(error.code === 'auth/invalid-email'){
        alert('Invalid email');
      }
      if(error.code === 'auth/wrong-password'){
        alert('Invalid password');
      }
      if(error.code === 'auth/user-not-found'){
        alert('The email is not registered or deactivated');
      }
    })
}

signup = () => {
  //alert('Login Successfull');
  this.props.navigation.navigate('Signup');
}
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#A2D9CE',
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    //color: '#fff',
    fontWeight: 'bold'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 20
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20
  },
  text: {
    alignItems: 'center',
    color: '#3B5699',
    fontWeight: 'bold',
    marginTop: 40
  },
  btn_text: {
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});
