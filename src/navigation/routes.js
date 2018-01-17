import { StackNavigator } from 'react-navigation';

import Identify from 'pages/Identify';
import Register from 'pages/Register';

const Routes = StackNavigator({
  Register: { screen: Register },
  Identify: { screen: Identify },
}, {
  headerMode: 'none',
});

export default Routes;
