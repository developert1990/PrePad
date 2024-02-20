import { validate } from "../utils/validation";

describe("validate function", () => {
  test('Should return errors object with "Required" message if firstName is empty', () => {
    const values = { firstName: "" };
    const errors = validate(values);
    expect(errors.firstName).toEqual("Required");
  });

  test("Should return errors object with message for firstName length", () => {
    const values = { firstName: "ab" };
    const errors = validate(values);
    expect(errors.firstName).toEqual("This is a required field that has a length between 3 and 25 characters");
  });

  test("Should return errors object with message if firstName contains non-alphabetic characters", () => {
    const values = { firstName: "Hong1" };
    const errors = validate(values);
    expect(errors.firstName).toEqual("The first name must be composed entirely of alphabetic characters");
  });

  test('Should return errors object with "Required" message if lastName is empty', () => {
    const values = { lastName: "" };
    const errors = validate(values);
    expect(errors.lastName).toEqual("Required");
  });

  test("Should return errors object with message for lastName length", () => {
    const values = { lastName: "a" };
    const errors = validate(values);
    expect(errors.lastName).toEqual("This is a required field that has a length between 2 and 30 characters");
  });

  test("Should return errors object with message if lastName contains non-alphabetic characters", () => {
    const values = { lastName: "Jang123" };
    const errors = validate(values);
    expect(errors.lastName).toEqual("The last name must be composed entirely of alphabetic characters");
  });

  test('Should return errors object with "Required" message if email is empty', () => {
    const values = { email: "" };
    const errors = validate(values);
    expect(errors.email).toEqual("Required");
  });

  test('Should return errors object with "Invalid email address" message if email is invalid', () => {
    const values = { email: "invalidemail" };
    const errors = validate(values);
    expect(errors.email).toEqual("Invalid email address");
  });

  test("Should return empty errors object if all fields are valid", () => {
    const values = { firstName: "John", lastName: "Doe", email: "john.doe@example.com" };
    const errors = validate(values);
    expect(errors).toEqual({});
  });
});
