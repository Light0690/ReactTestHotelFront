import { isAxiosError } from "axios";

import { setErrorNotification } from "@redux/slices/Auth/authSlice";

import { IReduxParams } from "@Interfaces/IReduxParams";

import instance from "./axiosConfig";

interface fetchParams {
  email: string;
  password: string;
}

const makeRequestUsingURL = (url: string) => {
  return async (
    { email, password }: fetchParams,
    { dispatch, rejectWithValue }: IReduxParams,
  ) => {
    try {
      const response = await instance.post(url, {
        email,
        password,
      });
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const message = error.response?.data.message || error.message;
        dispatch(setErrorNotification(message));
        return rejectWithValue(error);
      }
    }
  };
};

export const auth = {
  doAuthorization: makeRequestUsingURL("auth/login"),
  doRegistr: makeRequestUsingURL("auth/register"),
};
