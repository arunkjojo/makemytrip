import { configureStore } from '@reduxjs/toolkit'
import flightReducer from './flightSlice'

import locationReducer from './locationSlice'
import dateReducer from './dateSlice'
import travellerReducer from './travellerSlice'
import tripReducer from './tripSlice'

export default configureStore({
  reducer: {
    flight: flightReducer,

    location: locationReducer,
    date: dateReducer,
    traveller: travellerReducer,
    tripType: tripReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})