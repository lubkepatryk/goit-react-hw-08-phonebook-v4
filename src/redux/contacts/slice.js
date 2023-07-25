import { addContact, delContact, setFilter, fetchContacts } from './operations';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    filter: '',
};

export const contactsReducer = createReducer(initialState, {
  [addContact.fulfilled]: (state, action) => {
    state.items.push(action.payload);
  },
  [delContact.fulfilled]: (state, action) => {
    const index = state.items.findIndex((contact) => contact.id === action.payload);
    state.items.splice(index, 1);
  },
  [setFilter.fulfilled]: (state, action) => {
    state.filter = action.payload;
  },

  [fetchContacts.fulfilled]: (state, action) => {
    state.items = action.payload;
  },
  [fetchContacts.rejected]: (state, action) => {
    console.error(action.error);
  },
});