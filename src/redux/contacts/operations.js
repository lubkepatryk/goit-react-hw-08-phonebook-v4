// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // GET @ /contacts
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/contacts');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // POST @ /contacts
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({nameText, numberText}, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', {
//         name: nameText,
//         number: numberText,
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // DELETE @ /contacts/:id
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );


import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://64b65d67df0839c97e156daf.mockapi.io/contacts/contacts';

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


