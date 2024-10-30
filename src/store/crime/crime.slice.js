import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://suspect-management-backend.vercel.app";

export const fetchCrimes = createAsyncThunk(
  "crimesList/fetchCrimes",
  async () => {
    const response = await axios.get(`${url}/suspect/`);
    return response.data;
  },
);

// const user = {
//   _id: "671a4c5add01ad07d61adc0d",
//   name: "Natalia Vidić",
//   age: 79,
//   gender: "female",
//   status: "normal",
//   arrestedCount: 20,
//   avatar: "https://randomuser.me/api/portraits/women/67.jpg",
// };

const initialStatus = [];

export const crimeSlice = createSlice({
  name: "crimesList",
  initialState: {
    data: initialStatus,
    classifiedData: [],
    isLoading: true,
  },
  reducers: {
    changeStatus: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrimes.pending, (state) => {
        state.pending = true;
        state.isLoading = true;
      })
      .addCase(fetchCrimes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCrimes.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { changeStatus, classify } = crimeSlice.actions;

export default crimeSlice.reducer;
