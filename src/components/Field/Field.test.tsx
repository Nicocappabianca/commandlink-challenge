import { Field } from "./Field";
import { render, fireEvent, screen } from "@testing-library/react";
import { ReduxTestWrapper } from "../../utils/ReduxTestWrapper";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

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

  it("should dispatch the right values to redux store", () => {
    const fieldProps = {
      id: "name",
      type: "text",
      placeholder: "Name",
      required: true,
    };

    render(
      <ReduxTestWrapper>
        <Field {...fieldProps} />
      </ReduxTestWrapper>
    );

    const nameInput: HTMLInputElement = screen.getByTestId(`${fieldProps.id}-input`);

    fireEvent.change(nameInput, { target: { value: "john" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      payload: { id: "name", value: "john" },
      type: "form/updateFormField",
    });
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
