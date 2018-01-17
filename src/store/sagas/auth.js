import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/auth';

export function* authPhone(phone) {
  const response = yield call(api.get, `/auth/${phone}`);

  if (response.ok) {
    yield put(ActionCreators.authPhoneSuccess());
  } else {
    yield put(ActionCreators.authPhoneFailure());
  }
}
