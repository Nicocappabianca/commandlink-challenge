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
      id: "country",
      type: "select",
      placeholder: "Country",
      options: ["Engineer", "Designer", "Analyst"],
      required: false,
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
});
