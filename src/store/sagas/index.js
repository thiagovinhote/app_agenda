import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as AuthTypes } from 'store/ducks/auth';
import { Types as EventTypes } from 'store/ducks/events';

/* Sagas */
import { authPhone, authAuthenticate } from './auth';
import { getEvents, deleteEvent } from './events';

export default function* root() {
  yield [
    takeLatest(AuthTypes.AUTH_PHONE_REQUEST, authPhone),
    takeLatest(AuthTypes.AUTH_AUTHENTICATE_REQUEST, authAuthenticate),

    takeLatest(EventTypes.EVENT_REQUEST, getEvents),
    takeLatest(EventTypes.EVENT_DELETE_REQUEST, deleteEvent),
  ];
}
