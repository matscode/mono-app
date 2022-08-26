import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface User {
  type?: string;
  token?: string;
}

// Define the initial state using that type
const initialState: User = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => ({
      ...state, ...action.payload,
    }),
    destroyUserSession: (state) => ({}),
  },
})

export const { updateUser, destroyUserSession } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer