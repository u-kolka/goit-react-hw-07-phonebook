import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://63860e99875ca3273d4ed852.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    
    try {
      const response = await axios.get("/contacts");
      return response.data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.post("/contacts", name);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);