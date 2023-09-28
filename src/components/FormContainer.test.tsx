import { render } from "@testing-library/react";
import { FormContainer } from "./FormContainer";
import { ReduxTestWrapper } from "../utils/ReduxTestWrapper";

const formFields = [
  {
    id: "firstName",
    type: "text",
    placeholder: "First Name",
    required: true,
  },
  [
    {
      id: "phone",
      type: "phone",
      placeholder: "Phone",
      required: true,
    },
    {
      id: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
  ],
];

describe("FormContainer Component", () => {
  it("renders without errors", () => {
    render(
      <ReduxTestWrapper>
        <FormContainer formFields={formFields} />
      </ReduxTestWrapper>
    );
  });

  it("renders individual fields correctly", () => {
    const { getByLabelText } = render(
      <ReduxTestWrapper>
        <FormContainer formFields={formFields} />
      </ReduxTestWrapper>
    );

    const firstNameField = getByLabelText("First Name");
    expect(firstNameField).toBeDefined();

    const phoneField = getByLabelText("Phone");
    expect(phoneField).toBeDefined();

    const emailField = getByLabelText("Email");
    expect(emailField).toBeDefined();
  });
});
