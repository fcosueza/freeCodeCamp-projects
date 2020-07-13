import palindrome from "./palindrome";

describe("Check if a string is a palindrome, deleting non-alphanumerical characters", () => {
  test("return a boolean", () => {
    expect(typeof palindrome("eye")).toBe("boolean");
  });

  test("check a palindrome with only letters", () => {
    expect(palindrome("eye")).toBe(true);
  });

  test("check a palindrome with non-alphanumeric characters", () => {
    expect(palindrome("_eye")).toBe(true);
  });

  test("Check a palindrome with spaces", () => {
    expect(palindrome("race car")).toBe(true);
  });

  test("Check not a palindrome with only letters", () => {
    expect(palindrome("nope")).toBe(false);
  });

  test("Check not a palindrome with non-alphanumeric characters", () => {
    expect(palindrome("five|_/|four")).toBe(false);
  });

  test("Check not a palindrome with spaces", () => {
    expect(palindrome("not a palindrome")).toBe(false);
  });
});
