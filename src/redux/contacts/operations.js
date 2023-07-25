import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://connections-api.herokuapp.com/contacts';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ nameText, numberText }, thunkAPI) => {
    try {
      const response = await axios.post(`${apiUrl}`, {
        name: nameText,
        number: numberText,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${apiUrl}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFilter = createAsyncThunk('filter/setFilter', async (filterValue) => {
  return filterValue;
});
 
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch contacts');
  }
});