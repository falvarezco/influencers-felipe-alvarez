import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../../types';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

// Api Consumption
const dataFetch = async () => {
  const response = await fetch(API_URL);
  return response.json();
}

// Action Creators
export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  dataFetch,
);

export const initialState: InitialState  = {
  isLoading: false,
  users: [],
}

// Reducer Slice
const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: () => {},
});

// export const { submitAnswer, gotToNextQuestion } = usersSlice.actions;
export default usersSlice.reducer;
