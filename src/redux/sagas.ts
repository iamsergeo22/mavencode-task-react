import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionType';
import { LOGOUT } from './actionType';

// Simulate an API call (replace with your actual API call)
function* loginSaga(action: { type: string; payload: { email: string; password: string } }) {
  try {
    const { email, password } = action.payload;
    // Simulate an async request
    if (email === 'test@example.com' && password === 'Password123') {
      // Dispatch success action if credentials match
      yield put({ type: LOGIN_SUCCESS });
    } else {
      // Dispatch failure action if credentials don't match
      yield put({ type: LOGIN_FAILURE, payload: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle any errors during the process
    yield put({ type: LOGIN_FAILURE, payload: 'An error occurred' });
  }
}

// Watch for LOGIN_REQUEST actions and call loginSaga
export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}



// Simulate the logout API request (using delay)
function* logoutSaga() {
  try {
    yield delay(2000); // Simulate a 2-second delay for logout
    // Dispatch action to update the store (if you need to, such as resetting state or logging out the user)
    yield put({ type: LOGOUT });
    // Additional logic like redirecting can be added here
  } catch (error) {
    console.error('Logout failed', error);
  }
}

// Watch for LOGOUT action and call the logoutSaga
export function* watchLogoutRequest() {
  yield takeLatest(LOGOUT, logoutSaga);
}