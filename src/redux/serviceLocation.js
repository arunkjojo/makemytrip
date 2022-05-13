import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { CancelToken } from "axios";
const URL = 'https://makemytrip-666bbb-default-rtdb.firebaseio.com/locationData.json';

export const updateSuggestion = createAsyncThunk(
  'location/updateSuggestions',
  async (thunkAPI) => {
    const res = axios.get(URL)
    .then((result)=>{
      return result.data[1];
    }).catch((err)=>{
      return [];
    })
    return res
  }
);

export const updatePopularCity = createAsyncThunk(
  'location/updatePopularCity',
  async (thunkAPI) => {
    const res = axios.get(URL)
    .then((result)=>{
      return result.data[0];
    }).catch((err)=>{
      return [];
    });
    return res;
  }
);

