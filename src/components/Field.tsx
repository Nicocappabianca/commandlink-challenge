import { FC, useState } from "react";
import {
  Input,
  InputContainer,
  Placeholder,
  Select,
  TextArea,
  TextAreaPlaceholder,
} from "./styled";
import { FieldObject } from "../models/field";

export const Field: FC<FieldObject> = ({ id, type, placeholder, required, options }) => {
  /* TODO: replace this with a redux global state */
  const [fieldValue, setFieldValue] = useState("");

  const isSelectField = type === "select";
  const isTextArea = type === "textarea";
  const isInput = !isSelectField && !isTextArea;

  return (
    <InputContainer>
      {isSelectField && (
        <Select>
          {placeholder && (
            <option selected disabled>
              {placeholder}
            </option>
          )}
          {options?.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Select>
      )}

      {isTextArea && (
        <TextArea value={fieldValue} onChange={(e) => setFieldValue(e.target.value)} rows={4} />
      )}

      {isInput && (
        <Input
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          id={id}
          type={type}
          required={required ?? false}
        />
      )}

      {placeholder && isInput && <Placeholder hasValue={!!fieldValue}>{placeholder}</Placeholder>}
      {placeholder && isTextArea && (
        <TextAreaPlaceholder hasValue={!!fieldValue}>{placeholder}</TextAreaPlaceholder>
      )}
    </InputContainer>
  );
};
