import { Input, InputContainer, Placeholder } from "./styled";

const Field = () => {
  return (
    <InputContainer>
      <Input type="text" />
      <Placeholder>Your Placeholder</Placeholder>
    </InputContainer>
  );
};

export default Field;
