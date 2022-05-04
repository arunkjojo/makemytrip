import { createSlice } from "@reduxjs/toolkit";

export const flightSlice = createSlice({
  name: "flight",
  initialState: {
    tripType: "ONEWAY",
    trip: [
      {
        from: {
          id: "r2",
          name: "Mumbai",
          contry: "India",
          code: "BOM",
          description: "Chhatrapati Shivaji International Airport",
        },
        to: {
          id: "r1",
          name: "Delhi",
          contry: "India",
          code: "DEL",
          description: "Delhi Airport",
        },
        departure: new Date().toDateString(),
      },
      {
        from: {
          id: "r1",
          name: "Delhi",
          contry: "India",
          code: "DEL",
          description: "Delhi Airport",
        },
        to: {
          id: "",
          name: "",
          contry: "",
          code: "",
          description: "",
        },
        departure: '',
      },
    ],
    count: {
      adult: 1,
      children: 0,
      infant: 0,
      total: 1,
    },
    classes: "Economy/Premium Economy",
  },
  reducers: {
    changeTrip: (state, action) => {
      return {
        ...state,
        tripType: action.payload,
      };
    },

    changeFromLocation: (state, action) => {
      return {
        ...state,
        trip: [
          {from: action.payload}
        ],
      };
    },

    changeToLocation: (state, action) => {
      return {
        ...state,
        trip: [
          {to: action.payload}
        ],
      };
    },

    toggleLocation: (state, action) => {
      return {
        ...state,
        trip: [
          {
            from: {
              ...action.payload.to
            },
            to: {
              ...action.payload.from
            },
          }]
      };
    },


    changeDate: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    changeClassCount: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    addNewTrip: (state) => {
      let preIndex = state.trip.length-1;
      let newTrip = {
        from: {
          ...state.trip[preIndex].to
        },
        to: {
          id: "",
          name: "",
          contry: "",
          code: "",
          description: "",
        },
        departure: "",
      }
      return {
        ...state,
        trip: [...state.trip, newTrip]
      };
    },

    removeLastTrip: (state) => {
      return {
        ...state,
        trip: state.trip.filter((_,i) => i !== state.trip.length-1 )
      };
    },


    changeLocations: (state, action) => {
      let index= action.payload.primaryIndex;
      if(state.trip.length > index ){
        var changeFrom = action.payload.to;
      }
      // console.log(state.trip.length , index, changeFrom)
      return {
        ...state,
        trip: { 
          ...state.trip,
          [index]: {
            ...state.trip[index],
            to: action.payload.to,
          },
          [index+1]: {
            ...state.trip[index+1],
            from: changeFrom
          }
        }
      };
    },
  },
});

export const {
  changeTrip,

  addNewTrip,
  removeLastTrip,

  changeLocations,
  changeFromLocation,
  changeToLocation,
  toggleLocation,

  changeDate,

  changeClassCount,
} = flightSlice.actions;

export default flightSlice.reducer;
