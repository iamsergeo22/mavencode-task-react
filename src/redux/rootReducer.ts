// rootReducer.ts
import { combineReducers } from 'redux';
import authReducer from './reducer'; // Import the authReducer

const rootReducer = combineReducers({
  auth: authReducer, // Combine authReducer
});

export default rootReducer;
