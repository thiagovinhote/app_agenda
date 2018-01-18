import { createActions, createReducer } from 'reduxsauce';

/* Types & Creator */

const { Types, Creators } = createActions({
  eventRequest: null,
  eventSuccess: ['data'],
  eventFailure: null,
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EVENT_REQUEST]: request,
  [Types.EVENT_SUCCESS]: success,
  [Types.EVENT_FAILURE]: failure,
});
