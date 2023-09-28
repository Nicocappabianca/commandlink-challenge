import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ThankYouPage } from "./ThankYouPage";

const mockStore = configureMockStore([]);
const initialState = {
  form: {
    firstName: "John",
    lastName: "Doe",
  },
};
const store = mockStore(initialState);

describe("ThankYouPage Component", () => {
  it("should render a thank you message", () => {
    render(
      <Provider store={store}>
        <ThankYouPage formFields={[]} />
      </Provider>
    );

    const thankYouMessage = screen.getByText("Thank you!");
    expect(thankYouMessage).toBeDefined();
  });

  it("should display form data", () => {
    const formFields = [
      { id: "firstName", type: "text" },
      { id: "lastName", type: "text" },
    ];

    render(
      <Provider store={store}>
        <ThankYouPage formFields={formFields} />
      </Provider>
    );

    const firstName = screen.getByText("John");
    const lastName = screen.getByText("Doe");

    expect(firstName).toBeDefined();
    expect(lastName).toBeDefined();
  });
});
