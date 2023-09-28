import { FieldSet } from "../../models/field";
import { RootState } from "../../redux/store";

export const isFormValid = (formFields: FieldSet, formData: RootState["form"]): boolean => {
  for (const field of formFields.flat()) {
    if (field.required && !formData[field.id]) {
      return false;
    }
  }
  return true;
};
