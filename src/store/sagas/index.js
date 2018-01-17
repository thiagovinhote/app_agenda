import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as AuthTypes } from 'store/ducks/auth';

/* Sagas */
import { authPhone } from './auth';

export default function* root() {
  yield [
    takeLatest(AuthTypes.AUTH_PHONE_REQUEST, authPhone),
  ];
}
