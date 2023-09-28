import { CommandLinkLogo, FormContainer } from "./components";
import { Button, MainContainer } from "./components/styled";
import { fieldSet } from "./assets/fieldSet";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { isFormValid } from "./utils/isFormValid";

function App() {
  const formData = useSelector((state: RootState) => state.form);

  const isSubmitDisabled = !isFormValid(fieldSet, formData);

  return (
    <MainContainer>
      <CommandLinkLogo />
      <FormContainer formFields={fieldSet} />
      <Button disabled={isSubmitDisabled}>Submit</Button>
    </MainContainer>
  );
}

export default App;
