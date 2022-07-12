import {
  createAsyncThunk,
  createSlice,
  createDraftSafeSelector,
} from '@reduxjs/toolkit';
import { RootState } from '..';
import { isEmpty } from 'lodash';
import jsonData from '../../mockData/data.json';
import { InitialState, UserData, PaginatedData } from '../../types';

interface SetCurrentPage {
  type: string,
  payload: number,
}

// Simulate Api Call
const apiFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(jsonData.influencers);
  }, 2000);
});

// Selectors
export const selectState = (state: RootState) => state;

export const getTableData = createDraftSafeSelector(
  selectState, 
  ({usersState: {users}}: RootState) => {
    if (isEmpty(users)) return {};

    const userPages: PaginatedData = {};
    const pageSize = 10;

    for (let i = 0; i < users.length / pageSize; i++) {
      const page = [];
      const start = i * pageSize;
      const end = (i + 1) * pageSize;
      for (let j = start; j < end; j++) {
        page.push(users[j]);
      }
      userPages[i] = page;
    }

    return userPages;
  }
);

// Action Creators
export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async () => await apiFetch,
);

export const initialState: InitialState  = {
  isLoading: false,
  currentPage: 1,
  users: [],
}

// Reducer Slice
const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setCurrentPage: (state: any, {payload}: SetCurrentPage) => {
      state.currentPage = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        if (!state.isLoading) {
          state.isLoading = true;
          state.users = [];
        }
      })
      .addCase(fetchUsers.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.users = payload as UserData[];
      })
  },
});

export const { setCurrentPage } = usersSlice.actions;
export default usersSlice.reducer;
