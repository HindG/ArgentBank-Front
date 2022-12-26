import userReducer from '../features/user.slice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})
