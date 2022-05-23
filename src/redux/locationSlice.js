import { createSlice } from "@reduxjs/toolkit";
import { updateSuggestion, updatePopularCity } from "./serviceLocation";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    from: {
      id: "f1",
      code: "DEL",
      name: "New Delhi",
      country: "India",
      countryCode: "IN",
      description: "Indira Gandhi International Airport",
      icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
    },
    to: {
      id: "f11",
      code: "BOM",
      name: "Mumbai",
      country: "India",
      countryCode: "IN",
      description: "Chhatrapati Shivaji International Airport",
      icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
    },

    recent: {
      from:[
        {
          id: "f1",
          code: "DEL",
          name: "New Delhi",
          country: "India",
          countryCode: "IN",
          description: "Indira Gandhi International Airport",
          icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
        },
        {
          id: "f11",
          code: "BOM",
          name: "Mumbai",
          country: "India",
          countryCode: "IN",
          description: "Chhatrapati Shivaji International Airport",
          icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
        }
      ],
      to:[
        {
          id: "f11",
          code: "BOM",
          name: "Mumbai",
          country: "India",
          countryCode: "IN",
          description: "Chhatrapati Shivaji International Airport",
          icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
        },
        {
          id: "f1",
          code: "DEL",
          name: "New Delhi",
          country: "India",
          countryCode: "IN",
          description: "Indira Gandhi International Airport",
          icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
        }
      ],
    },
    popular: [],
    suggestions: [],
  },
  reducers: {
    changeFromLocation: (state, action) => {
      return {
        ...state,
        from: action.payload
      };
    },
    changeToLocation: (state, action) => {
      return {
        ...state,
        to: action.payload
      };
    },
    toggleLocation: (state, action) => {
      return {
        ...state,
        from: action.payload.to,
        to: action.payload.from
      }
    },

    addRecentList: (state) => {
      let to_included = state.recent.to.filter( v => v.id === state.to.id)
      if(to_included.length === 0) state.recent.to.push(state.to)

      let from_included = state.recent.from.filter( v => v.id === state.from.id)
      if(from_included.length === 0) state.recent.from.push(state.from)
    },
    removeRecentFirst: (state) => {
      if(state.recent.from.length > 3)
        state.recent.from.shift();
      if(state.recent.to.length > 3)
        state.recent.to.shift();
      
    }
  },
  extraReducers: {
    [updateSuggestion.fulfilled]: (state, acion) => {
      return {
        ...state,
        suggestions: acion.payload.data
      }
    },
    [updatePopularCity.fulfilled]: (state, acion) => {
      return {
        ...state,
        popular: acion.payload.data
      }
    }
  }
});

export const {
  changeFromLocation,
  changeToLocation,
  toggleLocation,

  addRecentList,
  removeRecentFirst

} = locationSlice.actions;

export default locationSlice.reducer;