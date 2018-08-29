import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, AsyncStorage, Dimensions, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import Fire from './Fire';

var width =  Dimensions.get('window').width;

export default class Home extends React.Component {

  state = {currentUser: null }

  static navigationOptions = {
      headerLeft: null
    }

  componentWillMount(){
    const user = Fire.auth().currentUser;
    if(user){
      this.state = {
        email: user.email,
      }
    }

  }
  render() {
    return (
      <View>
      <View style={styles.gridContainer}>
      </View>
      <View style={styles.gridTopBox}>
        <Text style={styles.gridTopText}>Select Match</Text>
      </View>
      <ScrollView>
      <View style={styles.gridBox}>
      </View>
      <View style={styles.gridBox}>
      </View>
      <View style={styles.gridBox}>
      </View>
      <View style={styles.gridBox}>
      </View>
      <View style={styles.gridBox}>
      </View>
      <View style={styles.gridBox}>
      </View>
      <View style={styles.gridBox}>
      </View>
    </ScrollView>
    </View>


    );
  }
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F6F8F8'
  },
  gridBox: {
    backgroundColor: 'white',
    height: 100,
    margin: 8,
    width: width-18,
    borderRadius: 10,
    shadowColor: '#c2c2c2',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  gridTopBox: {
    backgroundColor: 'white',
    height: 60
  },
  gridTopText: {
    color: '#2874A6',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    fontSize: 18
  }
})
