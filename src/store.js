import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { imgURL } from "./features/counter/img";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    imgAPI: imgURL,
  },
});
