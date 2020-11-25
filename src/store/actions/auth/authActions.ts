import cookie from 'js-cookie';
import * as t from '../../types';
import { AppThunk } from '../../shared';
import { Axios } from '../../../config/axios';

export interface RegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface UpdatePasswordInput {
  password: string;
}

export interface UpdateUserSnsInput {
  kakao?: string;
  line?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
}

export interface UpdateProfileInput {
  username?: string;
  email?: string;
  password?: string;
  role?: 'CLIENT' | 'ADMIN';
  introduce?: string;
  skills?: string[];
}

export const registerAction = (
  registerInput: RegisterInput
): AppThunk<any> => async (dispatch) => {
  try {
    dispatch({
      type: t.REGISTER_PENDING,
    });
    await Axios.post('/auth/register', registerInput);
    dispatch({
      type: t.REGISTER_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: t.REGISTER_FAIL,
    });
  }
};

export const unregisterAction = (): AppThunk<any> => async (dispatch) => {
  try {
    dispatch({
      type: t.UNREGISTER_PENDING,
    });
    await Axios.post('/auth/unregister', {});
    cookie.remove('connect.sid');
    dispatch({
      type: t.UNREGISTER_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: t.UNREGISTER_FAIL,
    });
  }
};

export const loginAction = (loginInput: LoginInput): AppThunk<any> => async (
  dispatch
) => {
  try {
    dispatch({
      type: t.LOGIN_PENDING,
    });
    const res = await Axios.post('/auth/login', loginInput);
    dispatch({
      type: t.LOGIN_SUCCESS,
      user: res.data.data,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: t.LOGIN_FAIL,
    });
  }
};

export const meAction = (): AppThunk<any> => async (dispatch) => {
  const sid = cookie.get('connect.sid');
  if (!sid) {
    return;
  }
  try {
    dispatch({
      type: t.ME_PENDING,
    });
    const res = await Axios.get('/auth/me');
    dispatch({
      type: t.ME_SUCCESS,
      user: res.data.data,
    });
  } catch (e) {
    if (e.response.status === 401) {
      cookie.remove('connect.sid');
    }
    dispatch({
      type: t.ME_FAIL,
    });
  }
};

export const logoutAction = (): AppThunk<any> => async (dispatch) => {
  try {
    dispatch({
      type: t.LOGOUT_PENDING,
    });
    await Axios.get('/auth/logout');
    cookie.remove('connect.sid');
    dispatch({
      type: t.LOGOUT_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: t.LOGOUT_FAIL,
    });
  }
};

export const updatePasswordAction = (
  updatePasswordInput: UpdatePasswordInput
): AppThunk<any> => async (dispatch) => {
  try {
    dispatch({
      type: t.UPDATE_PASSWORD_PENDING,
    });
    await Axios.put('/auth/password', updatePasswordInput);
    dispatch({
      type: t.UPDATE_PASSWORD_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: t.UPDATE_PASSWORD_FAIL,
    });
  }
};

export const updateSnsAction = (
  updateUserSnsInput: UpdateUserSnsInput
): AppThunk<any> => async (dispatch) => {
  try {
    dispatch({
      type: t.UPDATE_USER_SNS_PENDING,
    });
    await Axios.patch('/sns', updateUserSnsInput);
    dispatch({
      type: t.UPDATE_USER_SNS_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: t.UPDATE_USER_SNS_FAIL,
    });
  }
};

export const updateProfileAction = (
  updateProfileInput: UpdateProfileInput
): AppThunk<any> => async (dispatch) => {
  try {
    dispatch({
      type: t.UPDATE_PROFILE_PENDING,
    });
    await Axios.patch('/profile', updateProfileInput);
    dispatch({
      type: t.UPDATE_PROFILE_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: t.UPDATE_PROFILE_FAIL,
    });
  }
};

export const getProfileAction = (userId: number): AppThunk<any> => async (
  dispatch
) => {
  try {
    dispatch({
      type: t.GET_PROFILE_PENDING,
    });
    await Axios.get(`/profile/${userId}`);
    dispatch({
      type: t.GET_PROFILE_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: t.GET_PROFILE_FAIL,
    });
  }
};
