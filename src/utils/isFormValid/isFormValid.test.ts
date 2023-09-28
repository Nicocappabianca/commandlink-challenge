import { FieldSet } from "../../models/field";
import { isFormValid } from "./isFormValid";

describe("isFormValid", () => {
  it("should return true when all required fields are filled", () => {
    const formFields: FieldSet = [
      { id: "firstName", required: true, type: "text" },
      { id: "lastName", required: true, type: "text" },
    ];

    const formData = {
      firstName: "John",
      lastName: "Doe",
    };

    expect(isFormValid(formFields, formData)).toBe(true);
  });

  it("should return false when a required field is empty", () => {
    const formFields = [
      { id: "firstName", required: true, type: "text" },
      { id: "lastName", required: true, type: "text" },
    ];

    const formData = {
      firstName: "John",
      lastName: "",
    };

    expect(isFormValid(formFields, formData)).toBe(false);
  });

  it("should return true when there are no required fields", () => {
    const formFields = [
      { id: "email", type: "email" },
      { id: "phone", type: "phone" },
    ];

    const formData = {
      email: "john@example.com",
      phone: "",
    };

    expect(isFormValid(formFields, formData)).toBe(true);
  });
});
