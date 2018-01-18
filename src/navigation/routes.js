import { StackNavigator } from 'react-navigation';

import Identify from 'pages/Identify';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Calendar from 'pages/Calendar';
import Account from 'pages/Account';

const Routes = StackNavigator({
  Identify: { screen: Identify },
  Login: { screen: Login },
  Register: { screen: Register },

  Calendar: { screen: Calendar },
  Account: { screen: Account },
}, {
  headerMode: 'none',
  initialRouteName: 'Calendar',
});

export default Routes;
