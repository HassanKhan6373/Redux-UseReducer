import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";

const store = configureStore({
  reducer: rootReducer,
  // Add other store configuration options if needed
});

export default store;
