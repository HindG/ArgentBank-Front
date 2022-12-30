import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  lastname: "",
  firstname: "",
  token: "",
  isLogged: false,
  stayLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => ({
      ...state,
      isLogged: true,
      token: action.payload[0],
      email: action.payload[1],
      lastname: action.payload[2],
      firstname: action.payload[3],
      stayLoggedIn: action.payload[4],
    }),
    logout: () => initialState,
    update: (state, action) => ({
      ...state,
      email: action.payload[1],
      lastname: action.payload[2],
      firstname: action.payload[3],
      stayLoggedIn: action.payload[4],
    }),
  },
})

export const { login, logout, update } = userSlice.actions

export default userSlice.reducer
