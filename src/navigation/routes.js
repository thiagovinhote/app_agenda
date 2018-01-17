import { StackNavigator } from 'react-navigation';

import Identify from 'pages/Identify';
import Register from 'pages/Register';
import Login from 'pages/Login';

const Routes = StackNavigator({
  Identify: { screen: Identify },
  Login: { screen: Login },
  Register: { screen: Register },
}, {
  headerMode: 'none',
});

export default Routes;
