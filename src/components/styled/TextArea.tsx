import styled from "styled-components";

export interface PlaceholderProps {
  hasValue: boolean;
}

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid #ccc;
  transition: border-color 0.3s, transform 0.3s;
  font-size: 16px;
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
