import { Field } from ".";
import { render, fireEvent, screen } from "@testing-library/react";
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

  it("handles user input correctly", () => {
    const fieldProps = {
      id: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    };

    render(
      <Provider store={store}>
        <Field {...fieldProps} />
      </Provider>
    );

    const emailInput: HTMLInputElement = screen.getByTestId(`${fieldProps.id}-input`);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  it("renders a textarea when appropriate", () => {
    const fieldProps = {
      id: "comments",
      type: "textarea",
      placeholder: "Enter your comments",
    };

    render(
      <Provider store={store}>
        <Field {...fieldProps} />
      </Provider>
    );

    const textArea: HTMLTextAreaElement = screen.getByTestId(`${fieldProps.id}-textarea`);

    expect(textArea).toBeDefined();
  });

  it("renders a select input when appropriate", () => {
    const fieldProps = {
      id: "position",
      type: "select",
      placeholder: "Select your position",
      options: ["Engineer", "Designer", "Analyst"],
    };

    render(
      <Provider store={store}>
        <Field {...fieldProps} />
      </Provider>
    );

    const selectInput: HTMLSelectElement = screen.getByTestId(`${fieldProps.id}-select`);

    expect(selectInput).toBeDefined();
  });
});
