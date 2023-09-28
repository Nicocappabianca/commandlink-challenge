import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
