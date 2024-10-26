import { configureStore } from "@reduxjs/toolkit";
import crimeReducer from "./crime/crime.slice";

export default configureStore({
  reducer: {
    crimesList: crimeReducer, // 確認名稱是否與 useSelector 中的匹配
  },
});
