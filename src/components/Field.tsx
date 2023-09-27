import { FC } from "react";
import { Input, InputContainer, Placeholder, Select } from "./styled";
import { FieldObject } from "../models/field";

const Field: FC<FieldObject> = ({ id, type, placeholder, required, options }) => {
  const isSelectField = type === "select";

  return (
    <InputContainer>
      {isSelectField ? (
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
      ) : (
        <Input id={id} type={type} required={required ?? false} />
      )}
      {placeholder && !isSelectField && <Placeholder>{placeholder}</Placeholder>}
    </InputContainer>
  );
};

export default Field;
