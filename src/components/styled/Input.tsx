import styled from "styled-components";

export interface PlaceholderProps {
  hasValue?: boolean;
}

export interface InputProps {
  hasError?: boolean;
}

export const InputContainer = styled.div`
  position: relative;
  max-width: 300px;
  margin: 20px 0px;

  @media (min-width: 769px) {
    margin: 20px;
  }
`;

export const Input = styled.input<InputProps>`
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

export const Placeholder = styled.label<PlaceholderProps>`
  position: absolute;
  left: 10px;
  top: ${({ hasValue }) => (hasValue ? "-5px" : "50%")};
  transform: translateY(-50%);
  pointer-events: none;
  color: #666;
  transition: font-size 0.3s, transform 0.3s, top 0.3s;
  font-size: ${({ hasValue }) => (hasValue ? "12px" : "16px")};
`;
