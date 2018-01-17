import { StackNavigator } from 'react-navigation';

import Identify from 'pages/Identify';

const Routes = StackNavigator({
  Identify: { screen: Identify },
}, {
  headerMode: 'none',
});

export default Routes;
