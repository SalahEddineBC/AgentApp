/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import socket from '../../socket';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  t = () => {
    socket.on('user-need-help', eventdata => {
      console.warn('nrlk');
        this.props.navigation.navigate('Profile', {
            itemId: 86,
            latitude:eventdata.location.latitude,
            longitude:eventdata.location.longitude,
        });
    });
  };
  static navigationOptions = {
    header: null
  };
  render() {
      this.t();
    return (
      <View style={styles.container} onTouchStart={() => {}}>
        <Text style={styles.instructions}>To get h started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
