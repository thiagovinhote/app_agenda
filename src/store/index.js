import { combineReducers } from 'redux';

/* Reducers */
import navReducers from 'navigation/reducer';
import { reducer as auth } from './ducks/auth';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducers = combineReducers({
    nav: navReducers,
    auth,
  });
  return configureStore(rootReducers, rootSaga);
};
