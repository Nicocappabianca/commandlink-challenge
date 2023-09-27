import styled from "styled-components";

export const Select = styled.select`
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
