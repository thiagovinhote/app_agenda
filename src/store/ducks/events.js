import { createActions, createReducer } from 'reduxsauce';

/* Types & Creator */

const { Types, Creators } = createActions({
  eventRequest: null,
  eventSuccess: ['data'],
  eventFailure: null,

  eventDeleteRequest: ['_id'],
  eventDeleteSuccess: ['data'],
  eventDeleteFailure: null,

  eventSaveRequest: ['event'],
  eventSaveSuccess: ['data'],
  eventSaveFailure: null,
});

export { Types };

export default Creators;

/* Initial State */

const INITIAL_STATE = {
  events: [],
  loading: false,
  error: false,
};

/* Reducers */

/* Events */
export const request = state => ({
  ...state,
  loading: true,
  error: false,
});

export const success = (state, action) => ({
  events: action.data,
  loading: false,
  error: false,
});

export const failure = () => ({
  events: [],
  loading: false,
  error: true,
});

/* Delete */

export const deleteRequest = state => ({
  ...state,
  loading: true,
});

export const deleteSuccess = (state, action) => ({
  events: state.events.filter(e => e._id !== action.data._id),
  loading: false,
  error: false,
});

export const deleteFailure = state => ({
  ...state,
  loading: false,
  error: true,
});

/* Save */

export const saveRequest = state => ({
  ...state,
  loading: true,
  error: false,
});

export const saveSuccess = (state, action) => ({
  events: [...state.events, action.data],
  loading: false,
});

export const saveFailure = state => ({
  ...state,
  loading: false,
  error: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENT_REQUEST]: request,
  [Types.EVENT_SUCCESS]: success,
  [Types.EVENT_FAILURE]: failure,

  [Types.EVENT_DELETE_REQUEST]: deleteRequest,
  [Types.EVENT_DELETE_SUCCESS]: deleteSuccess,
  [Types.EVENT_DELETE_FAILURE]: deleteFailure,

  [Types.EVENT_SAVE_REQUEST]: saveRequest,
  [Types.EVENT_SAVE_SUCCESS]: saveSuccess,
  [Types.EVENT_SAVE_FAILURE]: saveFailure,
});
