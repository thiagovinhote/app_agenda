import { combineReducers } from 'redux';

/* Reducers */
import navReducers from 'navigation/reducer';
import { reducer as auth } from './ducks/auth';
import { reducer as event } from './ducks/events';
import { reducer as notification } from './ducks/notification';

import configureStore from './configureStore';
import rootSaga from './sagas';

export default () => {
  const rootReducers = combineReducers({
    nav: navReducers,
    auth,
    event,
    notification,
  });
  return configureStore(rootReducers, rootSaga);
};
