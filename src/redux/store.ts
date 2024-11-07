// store.ts
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Combined reducer
import { watchLoginRequest, watchLogoutRequest } from './sagas'; // Import saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the sagas
sagaMiddleware.run(watchLoginRequest);
sagaMiddleware.run(watchLogoutRequest); // Run the logout watcher

export default store;
