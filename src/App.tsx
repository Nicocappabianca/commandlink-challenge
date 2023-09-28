import { CommandLinkLogo, FormContainer } from "./components";
import { Button, MainContainer } from "./components/styled";
import { fieldSet } from "./assets/fieldSet";

function App() {
  return (
    <MainContainer>
      <CommandLinkLogo />
      <FormContainer formFields={fieldSet} />
      <Button>Submit</Button>
    </MainContainer>
  );
}

export default App;
