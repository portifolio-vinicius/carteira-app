import { AppDispatch } from "../store";
import { setUser, clearAuth, setLoading, setError } from "../slices/authSlice";
import { login as apiLogin, register as apiRegister } from "../api/authApi";
import { ILoginRequest, IRegisterRequest } from "../types/domain/Auth";

export const loginThunk =
  (data: ILoginRequest) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiLogin(data);
      dispatch(setUser(response.data));
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro ao fazer login";
      dispatch(setError(message));
      throw error;
    }
  };

export const registerThunk =
  (data: IRegisterRequest) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiRegister(data);
      dispatch(setUser(response.data));
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro ao criar conta";
      dispatch(setError(message));
      throw error;
    }
  };

export const logoutThunk = () => (dispatch: AppDispatch) => {
  dispatch(clearAuth());
};
