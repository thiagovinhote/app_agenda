import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

/* Core */
import React from 'react';

/* Navigation */
import NavigatorComponent from 'navigation';

/* Store */
import { Provider } from 'react-redux';
import create from './store';

const store = create();

const App = () => (
  <Provider store={store}>
    <NavigatorComponent />
  </Provider>
);

export default App;
