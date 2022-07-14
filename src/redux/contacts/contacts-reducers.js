import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (state, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (state, { payload }) => payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (state, { payload }) => payload,
  [deleteContact.pending]: () => null,
});

export const filterReducer = createReducer('', {
  [filterContacts]: (state, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  entities,
  isLoading,
  error,
});
