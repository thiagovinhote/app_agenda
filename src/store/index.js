import { combineReducers } from 'redux';

/* Reducers */
import navReducers from 'navigation/reducer';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducers = combineReducers({
    nav: navReducers,
  });
  return configureStore(rootReducers, rootSaga);
};
