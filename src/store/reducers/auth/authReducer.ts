import produce from 'immer';
import * as t from '../../types';

export interface RegisterAction {
  type:
    | typeof t.REGISTER_PENDING
    | typeof t.REGISTER_SUCCESS
    | typeof t.REGISTER_FAIL;
}

export interface UnregisterAction {
  type:
    | typeof t.UNREGISTER_PENDING
    | typeof t.UNREGISTER_SUCCESS
    | typeof t.UNREGISTER_FAIL;
}

export interface LoginAction {
  type: typeof t.LOGIN_PENDING | typeof t.LOGIN_SUCCESS | typeof t.LOGIN_FAIL;
  user: User | null;
}

export interface LogoutAction {
  type:
    | typeof t.LOGOUT_PENDING
    | typeof t.LOGOUT_SUCCESS
    | typeof t.LOGOUT_FAIL;
}

export interface MeAction {
  type: typeof t.ME_PENDING | typeof t.ME_SUCCESS | typeof t.ME_FAIL;
  user: User | null;
}

export interface UpdatePasswordAction {
  type:
    | typeof t.UPDATE_PASSWORD_PENDING
    | typeof t.UPDATE_PASSWORD_SUCCESS
    | typeof t.UPDATE_PASSWORD_FAIL;
}

export interface UpdateProfileSnsAction {
  type:
    | typeof t.UPDATE_USER_SNS_PENDING
    | typeof t.UPDATE_USER_SNS_SUCCESS
    | typeof t.UPDATE_USER_SNS_FAIL;
}

export interface UpdateProfileAction {
  type:
    | typeof t.UPDATE_PROFILE_PENDING
    | typeof t.UPDATE_PROFILE_SUCCESS
    | typeof t.UPDATE_PROFILE_FAIL;
}

export interface GetProfileAction {
  type:
    | typeof t.GET_PROFILE_PENDING
    | typeof t.GET_PROFILE_SUCCESS
    | typeof t.GET_PROFILE_FAIL;
  profile: any;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  profile: any | null;
  registerLoading: boolean;
  unregisterLoading: boolean;
  loginLoading: boolean;
  logoutLoading: boolean;
  meLoading: boolean;
  updatePasswordLoading: boolean;
  updateUserSnsLoading: boolean;
  updateProfileLoading: boolean;
  getProfileLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  profile: null,
  registerLoading: false,
  unregisterLoading: false,
  loginLoading: false,
  logoutLoading: false,
  meLoading: false,
  updatePasswordLoading: false,
  updateUserSnsLoading: false,
  updateProfileLoading: false,
  getProfileLoading: false,
};

export type AuthActionTypes =
  | RegisterAction
  | UnregisterAction
  | LoginAction
  | LogoutAction
  | MeAction
  | UpdatePasswordAction
  | UpdateProfileSnsAction
  | UpdateProfileAction
  | GetProfileAction;

const reducer = (state = initialState, action: AuthActionTypes) =>
  produce(state, (draft) => {
    switch (action.type) {
      case t.REGISTER_PENDING:
        draft.registerLoading = true;
        break;
      case t.REGISTER_SUCCESS:
        draft.registerLoading = false;
        break;
      case t.REGISTER_FAIL:
        draft.unregisterLoading = false;
        break;
      case t.UNREGISTER_PENDING:
        draft.unregisterLoading = true;
        break;
      case t.UNREGISTER_SUCCESS:
        draft.unregisterLoading = false;
        draft.user = null;
        break;
      case t.UNREGISTER_FAIL:
        draft.registerLoading = false;
        break;
      case t.LOGIN_PENDING:
        draft.loginLoading = true;
        break;
      case t.LOGIN_SUCCESS:
        draft.loginLoading = false;
        draft.user = action.user;
        break;
      case t.LOGIN_FAIL:
        draft.loginLoading = false;
        break;
      case t.LOGOUT_PENDING:
        draft.logoutLoading = true;
        break;
      case t.LOGOUT_SUCCESS:
        draft.logoutLoading = false;
        draft.user = null;
        break;
      case t.LOGOUT_FAIL:
        draft.logoutLoading = false;
        break;
      case t.ME_PENDING:
        draft.meLoading = true;
        break;
      case t.ME_SUCCESS:
        draft.meLoading = false;
        draft.user = action.user;
        break;
      case t.ME_FAIL:
        draft.meLoading = false;
        break;
      case t.UPDATE_PASSWORD_PENDING:
        draft.updatePasswordLoading = true;
        break;
      case t.UPDATE_PASSWORD_SUCCESS:
        draft.updatePasswordLoading = false;
        break;
      case t.UPDATE_PASSWORD_FAIL:
        draft.updatePasswordLoading = false;
        break;
      case t.UPDATE_USER_SNS_PENDING:
        draft.updateUserSnsLoading = true;
        break;
      case t.UPDATE_USER_SNS_SUCCESS:
        draft.updateUserSnsLoading = false;
        break;
      case t.UPDATE_USER_SNS_FAIL:
        draft.updateUserSnsLoading = false;
        break;
      case t.UPDATE_PROFILE_PENDING:
        draft.updateProfileLoading = true;
        break;
      case t.UPDATE_PROFILE_SUCCESS:
        draft.updateProfileLoading = false;
        break;
      case t.UPDATE_PROFILE_FAIL:
        draft.updateProfileLoading = false;
        break;
      case t.GET_PROFILE_PENDING:
        draft.getProfileLoading = true;
        break;
      case t.GET_PROFILE_SUCCESS:
        draft.getProfileLoading = false;
        draft.profile = action.profile;
        break;
      case t.GET_PROFILE_FAIL:
        draft.getProfileLoading = false;
        break;
      default:
        break;
    }
  });

export default reducer;
