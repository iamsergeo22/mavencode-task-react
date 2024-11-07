// reducer.ts
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionType';

interface AuthState {
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  user: any | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
