import { configureStore } from "@reduxjs/toolkit";
import crimeReducer from "./crime/crime.slice";

export default configureStore({
  reducer: {
    crimesList: crimeReducer,
  },
});
