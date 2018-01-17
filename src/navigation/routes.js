import { StackNavigator } from 'react-navigation';

import Identify from 'pages/Identify';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Calendar from 'pages/Calendar';

const Routes = StackNavigator({
  Identify: { screen: Identify },
  Login: { screen: Login },
  Register: { screen: Register },

  Calendar: { screen: Calendar },
}, {
  headerMode: 'none',
});

export default Routes;
