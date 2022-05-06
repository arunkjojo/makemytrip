import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://makemytrip-666bbb-default-rtdb.firebaseio.com/locationData.json';

export const updateSuggestion = createAsyncThunk(
  'location/updateSuggestions',
  async (thunkAPI) => {
    const res = axios.get(URL)
    .then((result)=>{
      // console.log("updateSuggestions",result.data[1]);
      return result.data[1];
    }).catch((err)=>{
      // console.log(err); 
      return [];
    })
    return res
  }
);

export const updatePopularCity = createAsyncThunk(
  'location/updatePopularCity',
  async (thunkAPI) => {
    const res=axios.get(URL)
    .then((result)=>{
      // console.log("updatePopularCity",res.data[0]);
      return result.data[0];
    }).catch((err)=>{
      // console.log(err);
      return [];
    });
    return res;
  }
);
