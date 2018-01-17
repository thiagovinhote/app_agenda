import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/auth';
import { NavigationActions } from 'react-navigation';

export function* authPhone(action) {
  const response = yield call(api.get, `/auth/${action.phone}`);

  if (response.ok) {
    yield put(NavigationActions.navigate({
      routeName: 'Login',
      params: { phone: action.phone },
    }));
    yield put(ActionCreators.authPhoneSuccess());
  } else {
    yield put(NavigationActions.navigate({
      routeName: 'Register',
      params: { phone: action.phone },
    }));
    yield put(ActionCreators.authPhoneFailure());
  }
}

export function* authAuthenticate(action) {
  const { data } = action;
  const response = yield call(api.post, '/auth/authenticate', data);

  if (response.ok) {
    yield put(NavigationActions.navigate({
      routeName: 'Calendar',
    }));
    yield put(ActionCreators.authAuthenticateSuccess(response.data));
  } else {
    yield put(ActionCreators.authAuthenticateFailure());
  }
}
