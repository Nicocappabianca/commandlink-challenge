import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid #ccc;
  transition: transform 0.3s;
  font-size: 16px;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const Placeholder = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #666;
  transition: font-size 0.3s, transform 0.3s;
  font-size: 16px;

  ${Input}:focus + & {
    font-size: 12px;
    transform: translateY(-30px);
  }
`;
