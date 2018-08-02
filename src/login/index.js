import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View, Button } from 'react-native';
class Login extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
      header: null,
  };
  checklogin = () => {
    console.warn('http://10.1.4.233:3000/api/v1/agent/' + this.state.ID);

    fetch('http://10.1.4.233:3000/api/v1/agent/' + this.state.ID)
      .then(response => response.json())
      .then(data => {
          this.props.navigation.navigate('Home')
        console.warn('ok');
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 27 }}>Login</Text>
        <TextInput
          placeholder="ID"
          onChangeText={text => this.setState({ ID: text })}
        />
        <View style={{ margin: 7 }} />
        <Button onPress={this.checklogin} title="Submit" />
      </ScrollView>
    );
  }
}
export default Login;
