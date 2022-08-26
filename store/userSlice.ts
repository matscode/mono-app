import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import { IUser } from '@/types/index'

// Define the initial state using that type
const initialState: IUser = {} as IUser

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUser>) => ({
      ...state, ...action.payload,
    }),
    destroyUserSession: (state) => ({}),
  },
})

export const { updateUser, destroyUserSession } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer