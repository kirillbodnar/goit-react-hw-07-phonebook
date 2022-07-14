import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer, contactsReducer } from './contacts/contacts-reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
