import { createActions, createReducer } from 'reduxsauce';

/* Types & Creators */
const { Types, Creators } = createActions({
  notificationShow: ['message', 'model'],
  notificationHidden: null,
});

export { Types };

export default Creators;

/* Reducers */

const INITIAL_STATE = {
  show: false,
  model: '',
  message: '',
};

export const show = (state, action) => ({
  show: true,
  model: action.model,
  message: action.message,
});

export const hidden = state => ({
  ...state,
  show: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NOTIFICATION_SHOW]: show,
  [Types.NOTIFICATION_HIDDEN]: hidden,
});
