import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Pages/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;
