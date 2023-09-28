import { CommandLinkLogo, FormContainer } from "./components";
import { MainContainer } from "./components/styled";
import { fieldSet } from "./assets/fieldSet";

function App() {
  return (
    <MainContainer>
      <CommandLinkLogo />
      <FormContainer formFields={fieldSet} />
    </MainContainer>
  );
}

export default App;
