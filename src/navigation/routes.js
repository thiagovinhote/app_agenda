import { StackNavigator } from 'react-navigation';

import Identify from 'pages/Identify';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Account from 'pages/Account';

const Routes = StackNavigator({
  Identify: { screen: Identify },
  Login: { screen: Login },
  Register: { screen: Register },

  Home: { screen: Home },
  Account: { screen: Account },
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
});

export default Routes;
