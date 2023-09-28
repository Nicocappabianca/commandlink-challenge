import styled from "styled-components";

export interface SelectProps {
  hasError?: boolean;
}

export const Select = styled.select<SelectProps>`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 0px;
  border-bottom: ${({ hasError }) => (hasError ? "1px solid #FF0000" : "1px solid #CCC")};
  transition: transform 0.3s;
  font-size: 16px;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
