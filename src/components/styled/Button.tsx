import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  color: #ccc;
  border: 2px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  outline: none;
  margin: 20px 0;

  &:hover {
    background-color: #ccc;
    color: #242424;
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    background-color: #5a5a5a;
    border-color: #ccc;
    color: #ccc;
    opacity: 0.5;
    pointer-events: none;
  }
`;
