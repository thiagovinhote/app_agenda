import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

/* Core */
import React from 'react';

/* Navigation */
import NavigatorComponent from 'navigation';
import BannerComponent from 'components/Banner';

/* Store */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BannerComponent>
        <NavigatorComponent />
      </BannerComponent>
    </PersistGate>
  </Provider>
);

export default App;
