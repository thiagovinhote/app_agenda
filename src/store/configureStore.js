import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

/* Persist */
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';


export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  /* Saga */
  const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  const persistReducer = persistCombineReducers({
    key: 'root',
    storage,
  }, rootReducer);

  /* Store */
  const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
  const store = createAppropriateStore(persistReducer, compose(...enhancers));

  /* Run Saga */
  sagaMiddleware.run(rootSaga);

  /* Persist */
  const persistor = persistStore(store);

  return { store, persistor };
};
