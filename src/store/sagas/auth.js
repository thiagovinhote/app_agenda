import api, { setAuthorization } from 'services/api';

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

  const { data: { token } } = response;

  setAuthorization(token);

  if (response.ok) {
    yield put(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Home',
        }),
      ],
    }));
    yield put(ActionCreators.authAuthenticateSuccess(response.data));
  } else {
    yield put(ActionCreators.authAuthenticateFailure());
  }
}

export function* signOut() {
  setAuthorization(null);
  yield put(NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'Identify',
      }),
    ],
  }));
}
