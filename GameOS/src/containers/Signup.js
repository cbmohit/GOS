import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, KeyboardAvoidingView, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import Profile  from './src/containers/Profile';
import  fire from './Fire'
import firebase from 'firebase'
import Home from './Home'


export default class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' style = {styles.signup_container}>
      {/*<ScrollView contentContainerStyle = {styles.signnup_container} keyboardShouldPersistTaps = 'never'>*/}

      <View style = {styles.signup_form_container}>
        <Text style = {styles.signup_banner_text}> SIGN UP </Text>
        <TextInput style = {styles.signup_input}
          onChangeText = {(email) => this.setState({email})}
          placeholder = "EMAIL ADDRESS"
          autoCapitalize = "none"
          keyboardType = "email-address"
          underlineColorAndroid = "#fff"
          />
          <TextInput style = {styles.signup_input}
            onChangeText = {(password) => this.setState({password})}
            placeholder = "PASSWORD"
            autoCapitalize = "none"
            underlineColorAndroid = "#fff"
            secureTextEntry = {true}
            />
            <TouchableOpacity style={styles.btn}
              onPress= {this.signupUser}>
              <Text style = {styles.btn_text}>REGISTER</Text>
            </TouchableOpacity>
      </View>
      {/*<View style = {styles.signup_action_container}>
        <TouchableOpacity onPress = {this.signupUser} style = {styles.signup_button}>
          <Text style ={styles.signup_text}> SIGNUP </Text>
        </TouchableOpacity>
      </View>
      //</ScrollView>*/}
      </KeyboardAvoidingView>
    );
  }
  signupUser =() =>{
    fire.auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Home'))
    .catch((error) => {
      if(error.code === 'auth/invalid-email'){
        alert('Invalid email');
      }
      if(error.code === 'auth/weak-password'){
        alert('Invalid password');
      }
    })
  }
}

  const styles = StyleSheet.create({
    signup_container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-between'
    },
    signup_form_container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 40,
      paddingRight: 40
    },
    signup_banner_text: {
      width: Dimensions.get('window').width,
      height: 40,
      fontSize: 20,
      color: '#000',
      fontWeight: 'bold',
      letterSpacing: 10,
      textAlign: 'center'
    },
    signup_input: {
      width: 200,
      height: 30,
      borderColor : 'grey',
      borderBottomWidth: 1,
      marginTop: 15,
      marginBottom: 15,
      textAlign: 'left',
      fontSize: 10
    },
    signup_action_container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    signup_button: {
      backgroundColor : '#C4DE9F',
      width: Dimensions.get('window').width,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signup_text: {
      color: '#000',
      fontSize: 24,
      fontWeight: '600',
      letterSpacing: 10
    },
    btn: {
      alignSelf: 'stretch',
      backgroundColor: '#01c853',
      padding: 15,
      alignItems: 'center',
      borderRadius: 20
    },
    btn_text: {
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15
    }
  })
