import { useState } from "react";
import { CommandLinkLogo, FormContainer } from "./components";
import { Button, MainContainer } from "./components/styled";
import { fieldSet } from "./assets/fieldSet";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { isFormValid } from "./utils/isFormValid";

function App() {
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  const formData = useSelector((state: RootState) => state.form);
  const isSubmitDisabled = !isFormValid(fieldSet, formData);

  const handleSubmit = () => {
    setFormWasSubmitted(true);
  };

  return (
    <MainContainer>
      <CommandLinkLogo />
      {formWasSubmitted ? (
        <>Thank you page</>
      ) : (
        <>
          <FormContainer formFields={fieldSet} />
          <Button disabled={isSubmitDisabled} onClick={handleSubmit}>
            Submit
          </Button>
        </>
      )}
    </MainContainer>
  );
}

export default App;
