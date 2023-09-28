import { Field } from "./components";
import { MainContainer } from "./components/styled";
import { fieldSet } from "./assets/fieldSet";

function App() {
  return (
    <MainContainer>
      <h1>CommandLinkChallenge</h1>
      {fieldSet.map((field) => {
        return Array.isArray(field) ? (
          <div>
            {field.map((subField) => (
              <Field
                key={subField.id}
                id={subField.id}
                type={subField.type}
                placeholder={subField.placeholder}
                options={subField.options}
              />
            ))}
          </div>
        ) : (
          <Field
            key={field.id}
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            options={field.options}
          />
        );
      })}
    </MainContainer>
  );
}

export default App;
