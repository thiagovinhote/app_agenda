import { StackNavigator } from 'react-navigation';

import Identify from 'pages/Identify';
import Register from 'pages/Register';
import Login from 'pages/Login';

const Routes = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Identify: { screen: Identify },
}, {
  headerMode: 'none',
});

export default Routes;
