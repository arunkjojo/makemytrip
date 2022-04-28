import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './locationSlice'
import dateReducer from './dateSlice'
import travellerReducer from './travellerSlice'

export default configureStore({
  reducer: {
    location: locationReducer,
    date: dateReducer,
    traveller: travellerReducer
  }
})