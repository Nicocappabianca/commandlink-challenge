import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

export interface RootState {
  form: ReturnType<typeof formReducer>;
}

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
