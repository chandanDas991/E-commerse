import { configureStore } from '@reduxjs/toolkit'
import  counterSlics  from './slices/counterSlics'

export default configureStore({
  reducer: {
    counter:counterSlics
  },
})