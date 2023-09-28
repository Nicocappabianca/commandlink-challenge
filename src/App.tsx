import { MainContainer, MainTitle } from "./components/styled";
import { fieldSet } from "./assets/fieldSet";
import { FormContainer } from "./components/FormContainer";

function App() {
  return (
    <MainContainer>
      <MainTitle>CommandLink Challenge</MainTitle>
      <FormContainer formFields={fieldSet} />
    </MainContainer>
  );
}

export default App;
