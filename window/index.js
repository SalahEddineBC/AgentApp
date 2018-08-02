import { createStackNavigator } from 'react-navigation';
import { Home, Profile, Login } from '../src';

const RootStackLogged = createStackNavigator(
  {
    Home: Home,
    Profile: Profile,
    Login: Login
  },
  {
    initialRouteName: 'Home'
  }
);
export default RootStackLogged;
