import { Field } from ".";
import { render, fireEvent, screen } from "@testing-library/react";
import { ReduxTestWrapper } from "../utils/ReduxTestWrapper";

describe("Field Component", () => {
  it("should render without errors", () => {
    const fieldProps = {
      id: "firstName",
      type: "text",
      placeholder: "First name",
      required: true,
    };

    const { container } = render(
      <ReduxTestWrapper>
        <Field {...fieldProps} />
      </ReduxTestWrapper>
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
      <ReduxTestWrapper>
        <Field {...fieldProps} />
      </ReduxTestWrapper>
    );

    const emailInput: HTMLInputElement = screen.getByTestId(`${fieldProps.id}-input`);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  it("should render a textarea when appropriate", () => {
    const fieldProps = {
      id: "comments",
      type: "textarea",
      placeholder: "Enter your comments",
    };

    render(
      <ReduxTestWrapper>
        <Field {...fieldProps} />
      </ReduxTestWrapper>
    );

    const textArea: HTMLTextAreaElement = screen.getByTestId(`${fieldProps.id}-textarea`);

    expect(textArea).toBeDefined();
  });

  it("should render a select input when appropriate", () => {
    const fieldProps = {
      id: "position",
      type: "select",
      placeholder: "Select your position",
      options: ["Engineer", "Designer", "Analyst"],
    };

    render(
      <ReduxTestWrapper>
        <Field {...fieldProps} />
      </ReduxTestWrapper>
    );

    const selectInput: HTMLSelectElement = screen.getByTestId(`${fieldProps.id}-select`);

    expect(selectInput).toBeDefined();
  });
});
