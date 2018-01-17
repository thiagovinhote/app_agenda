import { StackNavigator } from 'react-navigation';

import Identifier from 'pages/Identifier';

const Routes = StackNavigator({
  Identifier: { screen: Identifier },
}, {
  headerMode: 'none',
});

export default Routes;
