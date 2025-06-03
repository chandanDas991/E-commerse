import { configureStore } from '@reduxjs/toolkit'
import  counterSlics  from './slices/counterSlics'
import  breadcrumb  from './slices/breadcrumb'

export default configureStore({
  reducer: {
    counter:counterSlics,
    active:breadcrumb
  },
})