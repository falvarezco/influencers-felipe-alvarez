import {
  createAsyncThunk,
  createSlice,
  createDraftSafeSelector,
} from '@reduxjs/toolkit';
import { RootState } from '..';
import jsonData from '../../mockData/data.json';
import { InitialState, UserData } from '../../types';
import { getDataByPages, getByFilteredStr } from '../../utils'; 

interface SetCurrentPage {
  type: string,
  payload: number,
}

interface SetSearchValue {
  type: string,
  payload: string,
}

// Simulate Api Call
const apiFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(jsonData.influencers);
  }, 2000);
});

// Selectors
export const selectUsers = ({usersState}: RootState) => usersState.users;
export const selectSearch = ({usersState}: RootState) => usersState.searchValue;

export const getFilteredData = createDraftSafeSelector(
  [selectUsers, selectSearch], 
  getByFilteredStr,
);

export const getDataPages = createDraftSafeSelector(
  [getFilteredData],
  getDataByPages,
)

// Action Creators
export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async () => await apiFetch,
);

export const initialState: InitialState  = {
  isLoading: false,
  searchValue: '',
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
    },
    setSearchValue: (state: any, {payload}: SetSearchValue) => {
      state.currentPage = 1;
      state.searchValue = payload;
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

export const { setCurrentPage, setSearchValue } = usersSlice.actions;
export default usersSlice.reducer;
