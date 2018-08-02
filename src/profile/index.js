/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class Profile extends Component {
    static navigationOptions = {
        header:null
    };
    constructor(props) {
        super(props);
    }
    render() {
        return <View style={styles.container}>
            <Text style={styles.welcome}>
                {this.props.navigation.getParam('latitude','lol')}</Text>
            <Text style={styles.welcome}>
                {this.props.navigation.getParam('longitude','lol')}</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </View>;
    }
}
export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
