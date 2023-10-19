import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactInitialState = {
  items: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfieldGetAllContacts = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

const handleFulfieldAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};

const handleFulfieldDeleteContact = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload);
  state.isLoading = false;
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfieldGetAllContacts)
      .addCase(addContact.fulfilled, handleFulfieldAddContact)
      .addCase(deleteContact.fulfilled, handleFulfieldDeleteContact)
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          handlePending(state);
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          handleRejected(state, action.payload);
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
