import { ReactNode, FC } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../redux/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

interface ReduxTestWrapperProps {
  children: ReactNode;
}

export const ReduxTestWrapper: FC<ReduxTestWrapperProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
