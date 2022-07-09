import { configureStore } from '@reduxjs/toolkit';
import users from './reducer';

export const store = configureStore({
  reducer: {
    usersState: users,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

