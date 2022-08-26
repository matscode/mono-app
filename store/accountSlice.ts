import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface Account {
  account_name: string;
  account_number: string;
  bank_name: string;
}

// Define the initial state using that type
const initialState: Account[] = []

export const accountSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => ({
      ...state, ...action.payload,
    }),
  },
})

export const { addAccount } = accountSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default accountSlice.reducer