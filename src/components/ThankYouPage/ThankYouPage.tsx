import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FieldSet } from "../../models/field";
import { SectionTitle, Title } from "../styled";
import { Container } from "../styled/Container";

interface ThankYouPageProps {
  formFields: FieldSet;
}

export const ThankYouPage: FC<ThankYouPageProps> = ({ formFields }) => {
  const formData = useSelector((state: RootState) => state.form);

  return (
    <Container>
      <Title>Thank you!</Title>
      <SectionTitle>We appreciate you taking the time to complete the form</SectionTitle>
      {formFields.map((field, index) => {
        let fieldValue = "";

        if (Array.isArray(field)) {
          fieldValue = field
            .map((subField) => formData[subField.id])
            .filter((item) => item)
            .join(" ");
        } else {
          fieldValue = formData[field.id];
        }

        if (fieldValue) {
          return <p key={index}>{fieldValue}</p>;
        } else {
          return null;
        }
      })}
    </Container>
  );
};
