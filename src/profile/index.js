/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  DeviceEventEmitter,
  Picker,
  Image
} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import MapView ,{Marker}from 'react-native-maps';
import styles from './style';

const { width, height } = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class Profile extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 21.617,
        longitude: 39.156,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0923,
          longitudeDelta: 0.0421
        };
        this.setState({
          location: pos
        });
        this.gotoCurrentLocation();
      },
      error => console.warn(error.message),
      { enableHighAccuracy: true, timeout: 2500, maximumAge: 3600 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      const pos = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.034
      };
      this.setState({
        location: pos
      });
      this.gotoCurrentLocation();
    });
  };
  gotoCurrentLocation = () => {
    const { location } = this.state;
    this.map.animateToRegion({
      latitude: parseFloat(location.latitude),
      longitude: parseFloat(location.longitude),
      latitudeDelta: parseFloat(location.latitudeDelta),
      longitudeDelta: parseFloat(location.longitudeDelta)
    });
  };

  render() {
    let pic = {
      uri:
        'https://cdn3.iconfinder.com/data/icons/menu-icons-1/100/menu-512.png'
    };

    const posi = {
      latitude: this.props.navigation.getParam('latitude', 0.0),
      longitude: this.props.navigation.getParam('longitude', 0.0)
    };
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.map = ref)}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          initialRegion={this.state.location}
          style={styles.redbox}
        >
          <Marker coordinate={posi} title={'ok'} />

          <MapViewDirections
            origin={this.state.location}
            destination={posi}
            apikey={'AIzaSyA0wuQjjlPDL3zyZHKNT__NH1bG2BwQCbU'}
            strokeWidth={3}
            strokeColor="hotpink"
            onStart={params => {
              console.log(
                `Started routing between "${params.origin}" and "${
                  params.destination
                }"`
              );
            }}
            onReady={result => {
              this.map.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20
                }
              });
            }}
            onError={errorMessage => {
              // console.log('GOT AN ERROR');
            }}
          />
        </MapView>
        <Image source={pic} style={styles.burgerMenu} />
      </View>
    );
  }
}

export default Profile;
