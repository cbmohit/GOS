import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import fire  from './Fire';
import Loading from './Loading';
//import Profile  from './src/containers/Profile';


export default class Profile extends React.Component {

  render() {
    return (
      <View>
        <Text style = {styles.text} onPress= {this.logout}>
          Logout
        </Text>
      </View>
    );
  }

  static navigationOptions = {
    headerLeft: null
  }

  logout =() =>{
    fire.auth().signOut()
    .then(function(){
      alert('Logout Successfull');
    })
    .catch(function(error){
      alert(error);
    })
    this.props.navigation.navigate('Loading');
  }

}



const styles = StyleSheet.create({
  baseText:{
    fontFamily: 'Cochin'
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#3B5699',
    fontWeight: 'bold',
    fontSize: '24',
    marginTop: 100
  }
})
