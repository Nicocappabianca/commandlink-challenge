import { useState } from "react";
import { CommandLinkLogo, FormContainer, ThankYouPage } from "./components";
import { Button, MainContainer } from "./components/styled";
import { fieldSet } from "./assets/fieldSet";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { isFormValid } from "./utils/isFormValid";

function App() {
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  const formData = useSelector((state: RootState) => state.form);
  const canSubmit = isFormValid(fieldSet, formData);

  const handleSubmit = () => {
    canSubmit && setFormWasSubmitted(true);
  };

  return (
    <MainContainer>
      <CommandLinkLogo />
      {formWasSubmitted ? (
        <ThankYouPage formFields={fieldSet} />
      ) : (
        <>
          <FormContainer formFields={fieldSet} />
          <Button disabled={!canSubmit} onClick={handleSubmit}>
            Submit
          </Button>
        </>
      )}
    </MainContainer>
  );
}

export default App;
