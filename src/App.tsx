import { Field } from "./components";
import { MainContainer } from "./components/styled";

function App() {
  return (
    <MainContainer>
      <h1>CommandLinkChallenge</h1>
      <Field id="test-id" type="text" placeholder="name" />
    </MainContainer>
  );
}

export default App;
