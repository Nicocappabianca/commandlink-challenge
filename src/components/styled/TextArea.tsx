import styled from "styled-components";

export interface PlaceholderProps {
  hasValue: boolean;
}

export interface TextAreaProps {
  hasError?: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 0px;
  border-bottom: ${({ hasError }) => (hasError ? "1px solid #FF0000" : "1px solid #CCC")};
  transition: border-color 0.3s, transform 0.3s;
  font-size: 16px;
  font-family: inherit;
  background-color: transparent;
  resize: vertical;

  &:focus {
    outline: none;
  }
`;

export const TextAreaPlaceholder = styled.label<PlaceholderProps>`
  position: absolute;
  left: 15px;
  top: 6px;
  pointer-events: none;
  color: #666;
  visibility: ${({ hasValue }) => (hasValue ? "hidden" : "visible")};
`;
