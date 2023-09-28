import { Field } from ".";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../redux/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

describe("Field Component", () => {
  it("renders without errors", () => {
    const fieldProps = {
      id: "firstName",
      type: "text",
      placeholder: "First name",
      required: true,
    };

    const { container } = render(
      <Provider store={store}>
        <Field {...fieldProps} />
      </Provider>
    );

    expect(container).toBeDefined();
  });
});
