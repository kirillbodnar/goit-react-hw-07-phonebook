// import * as actions from './contacts-actions';
import * as API from '../../services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());
//   try {
//     const contacts = await API.fetchContacts();
//     console.log(contacts);
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await API.fetchContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const newContact = await API.addContact(contact);
    return newContact;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const res = await API.deleteContact(id);
    return res;
  }
);
