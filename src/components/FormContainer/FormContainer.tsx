import { FC } from "react";
import { FieldSet } from "../../models/field";
import { Form, SubFieldWrapper } from "../styled";
import { Field } from "..";

interface FormContainerProps {
  formFields: FieldSet;
}

export const FormContainer: FC<FormContainerProps> = ({ formFields }) => {
  return (
    <Form>
      {formFields.map((field, index) => {
        return Array.isArray(field) ? (
          <SubFieldWrapper key={index}>
            {field.map((subField) => (
              <Field
                key={subField.id}
                id={subField.id}
                type={subField.type}
                placeholder={subField.placeholder}
                options={subField.options}
                required={subField.required}
              />
            ))}
          </SubFieldWrapper>
        ) : (
          <Field
            key={field.id}
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            options={field.options}
            required={field.required}
          />
        );
      })}
    </Form>
  );
};
