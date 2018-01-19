import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

/* Core */
import React from 'react';

/* Navigation */
import NavigatorComponent from 'navigation';

import Banner from 'components/Banner';

/* Store */
import { Provider } from 'react-redux';
import create from './store';

const store = create();

const App = () => (
  <Provider store={store}>
    <Banner
      show
      success
      message="Mensagem"
    >
      <NavigatorComponent />
    </Banner>
  </Provider>
);

export default App;
