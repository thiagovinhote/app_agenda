import { createActions, createReducer } from 'reduxsauce';

/* Types & Creator */

const { Types, Creators } = createActions({
  authPhoneRequest: ['phone'],
  authPhoneSuccess: null,
  authPhoneFailure: null,

  authRegisterRequest: ['data'],
  authRegisterSuccess: ['user'],
  authRegisterFailure: null,

  authAuthenticateRequest: ['data'],
  authAuthenticateSuccess: ['user'],
  authAuthenticateFailure: null,

  authSignOut: null,
});

export { Types };

export default Creators;

/* Initial State */

const INITIAL_STATE = {
  user: {},
  loading: false,
  success: false,
  error: false,
};

/* Reducers */

/* Phone */
export const phoneRequest = state => ({
  ...state,
  error: false,
  success: false,
  loading: true,
});

export const phoneSuccess = state => ({
  ...state,
  success: true,
  loading: false,
  error: false,
});

export const phoneFailure = state => ({
  ...state,
  error: true,
  success: false,
  loading: false,
});

/* Register */

export const registerRequest = state => ({
  ...state,
  error: false,
  success: false,
  loading: true,
});

export const registerSuccess = (state, action) => ({
  user: action.user,
  success: true,
  loading: false,
  error: false,
});

export const registerFailure = () => ({
  user: null,
  error: true,
  success: false,
  loading: false,
});

/* Authenticate */

export const authenticateRequest = state => ({
  ...state,
  error: false,
  success: false,
  loading: true,
});

export const authenticateSuccess = (state, action) => ({
  user: action.user,
  success: true,
  loading: false,
  error: false,
});

export const authenticateFailure = () => ({
  user: null,
  error: true,
  success: false,
  loading: false,
});

export const signOut = state => ({
  ...state,
  user: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_PHONE_REQUEST]: phoneRequest,
  [Types.AUTH_PHONE_SUCCESS]: phoneSuccess,
  [Types.AUTH_PHONE_FAILURE]: phoneFailure,

  [Types.AUTH_REGISTER_REQUEST]: registerRequest,
  [Types.AUTH_REGISTER_SUCCESS]: registerSuccess,
  [Types.AUTH_REGISTER_FAILURE]: registerFailure,

  [Types.AUTH_AUTHENTICATE_REQUEST]: authenticateRequest,
  [Types.AUTH_AUTHENTICATE_SUCCESS]: authenticateSuccess,
  [Types.AUTH_AUTHENTICATE_FAILURE]: authenticateFailure,

  [Types.AUTH_SIGN_OUT]: signOut,
});
