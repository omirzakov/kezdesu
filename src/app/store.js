import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import userReducer from './reducers/user';
import eventReducer from './reducers/event';
import { api } from './api/main';

const reducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  [api.reducerPath]: api.reducer
})
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store;