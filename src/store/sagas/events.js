import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import EventCreators from 'store/ducks/events';

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
    yield put(EventCreators.eventDeleteSuccess(response.data));
  } else {
    yield put(EventCreators.eventDeleteFailure());
  }
}

export function* saveRequest(action) {
  const event = { ...action.event, user: "5a5ea3880dbc2600145aaec4" };
  const response = yield call(api.post, '/events', event);

  if (response.ok) {
    yield put(EventCreators.eventSaveSuccess(response.data));
  } else {
    yield put(EventCreators.eventSaveFailure());
  }
}
