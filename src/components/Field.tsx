import { FC } from "react";
import {
  Input,
  InputContainer,
  Placeholder,
  Select,
  TextArea,
  TextAreaPlaceholder,
} from "./styled";
import { FieldObject } from "../models/field";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateFormField } from "../redux/formSlice";

export const Field: FC<FieldObject> = ({ id, type, placeholder, required, options }) => {
  const fieldValue = useSelector((state: RootState) => state.form[id] ?? "");
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    dispatch(updateFormField({ id, value }));
  };

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

      {isTextArea && <TextArea value={fieldValue} onChange={handleChange} rows={4} />}

      {isInput && (
        <Input
          value={fieldValue}
          onChange={handleChange}
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
