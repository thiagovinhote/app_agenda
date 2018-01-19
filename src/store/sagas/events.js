import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import EventCreators from 'store/ducks/events';
import NotificationCreators from 'store/ducks/notification';

function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
}

export function* getEvents() {
  const response = yield call(api.get, '/events');

  if (response.ok) {
    yield put(EventCreators.eventSuccess(response.data));
  } else {
    yield put(EventCreators.eventFailure());
  }
}

export function* deleteEvent(action) {
  const response = yield call(api.delete, `/events/${action._id}`);

  if (response.ok) {
    yield put(NotificationCreators.notificationShow('Evento removido com sucesso', 'success'));
    yield put(EventCreators.eventDeleteSuccess(response.data));
  } else {
    yield put(NotificationCreators.notificationShow('Falha ao remover evento', 'danger'));
    yield put(EventCreators.eventDeleteFailure());
  }

  yield delay(3000);
  yield put(NotificationCreators.notificationHidden());
}

export function* saveRequest(action) {
  const event = { ...action.event, user: "5a5ea3880dbc2600145aaec4" };
  const response = yield call(api.post, '/events', event);

  if (response.ok) {
    yield put(NotificationCreators.notificationShow('Evento criado com sucesso', 'success'));
    yield put(EventCreators.eventSaveSuccess(response.data));
  } else {
    yield put(NotificationCreators.notificationShow('Falha ao criar evento', 'danger'));
    yield put(EventCreators.eventSaveFailure());
  }

  yield delay(3000);
  yield put(NotificationCreators.notificationHidden());
}
