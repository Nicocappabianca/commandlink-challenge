import { isValidEmail } from "./isValidEmail";

describe("isValidEmail", () => {
  it("should return true for a valid email address", () => {
    const validEmails = [
      "john.doe@example.com",
      "jane.smith1234@gmail.com",
      "user_name12345@subdomain.domain.co.uk",
    ];

    validEmails.forEach((email) => {
      expect(isValidEmail(email)).toBe(true);
    });
  });

  it("should return false for an invalid email address", () => {
    const invalidEmails = [
      "notanemail",
      "missing@at",
      "@domain.com",
      "spaces in@email.com",
      "special#character@example.com",
    ];

    invalidEmails.forEach((email) => {
      expect(isValidEmail(email)).toBe(false);
    });
  });
});
