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
        // {
        //   id: "f11",
        //   code: "BOM",
        //   name: "Mumbai",
        //   country: "India",
        //   countryCode: "IN",
        //   description: "Chhatrapati Shivaji International Airport",
        //   icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
        // }
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
        // {
        //   id: "f1",
        //   code: "DEL",
        //   name: "New Delhi",
        //   country: "India",
        //   countryCode: "IN",
        //   description: "Indira Gandhi International Airport",
        //   icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png"
        // }
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
      state.recent.to.push(state.to)
      state.recent.from.push(state.from)
    },
    removeRecentFirst: (state, action) => {
      console.log(action.payload);
      switch (action.payload.type) {
        case 'TO_FIRST':
          let recent_to = [
            ...state.recent.to,
            state.recent.to.slice(1,state.recent.to.length)
          ];
          return {
            ...state,
            recent:{
              ...state.recent,
              to: [
                ...recent_to
              ]
            }
          } 
        case 'FROM_FIRST' :
          let recent_from = [
            ...state.recent.from,
            state.recent.from.slice(1,state.recent.from.length)
          ];
          return {
            ...state,
            recent:{
              ...state.recent,
              from: [
                ...recent_from
              ]
            }
          }
        default:
          return state;
      }
    }
  },
  extraReducers: {
    [updateSuggestion.fulfilled]: (state, acion) => {
      // console.log(acion.payload.data);
      return {
        ...state,
        suggestions: acion.payload.data
      }
    },
    [updatePopularCity.fulfilled]: (state, acion) => {
      // console.log(acion.payload.data);
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