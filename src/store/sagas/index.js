import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as AuthTypes } from 'store/ducks/auth';
import { Types as EventTypes } from 'store/ducks/events';

/* Sagas */
import { authPhone, authAuthenticate, authRegister, signOut } from './auth';
import { getEvents, deleteEvent, saveRequest } from './events';

export default function* root() {
  yield [
    takeLatest(AuthTypes.AUTH_PHONE_REQUEST, authPhone),
    takeLatest(AuthTypes.AUTH_AUTHENTICATE_REQUEST, authAuthenticate),
    takeLatest(AuthTypes.AUTH_REGISTER_REQUEST, authRegister),

    takeLatest(AuthTypes.AUTH_SIGN_OUT, signOut),

    takeLatest(EventTypes.EVENT_REQUEST, getEvents),
    takeLatest(EventTypes.EVENT_DELETE_REQUEST, deleteEvent),
    takeLatest(EventTypes.EVENT_SAVE_REQUEST, saveRequest),
  ];
}
