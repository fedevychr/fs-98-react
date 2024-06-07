import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { instance } from '../auth/authSlice';

export const apiGetContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');
      console.log('data GetContacts: ', data);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.massage);
    }
  },
);

export const apiAddContacts = createAsyncThunk(
  'contacts/addNew',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/contacts', formData);
      console.log('data AddContacts: ', data);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.massage);
    }
  },
);

export const apiRemoveContacts = createAsyncThunk(
  'contacts/remove',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      console.log('data RemoveContacts: ', data);

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.massage);
    }
  },
);

const INITIAL_STATE = {
  contacts: null,
  isLoading: false,
  isError: false,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  //   Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  extraReducers: builder =>
    builder
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(apiAddContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(apiRemoveContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id,
        );
      })
      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          apiAddContacts.pending,
          apiRemoveContacts.pending,
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        },
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          apiAddContacts.rejected,
          apiRemoveContacts.rejected,
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        },
      ),
});

export const contactsReducer = contactsSlice.reducer;
