import palindrome from "./palindrome";

describe("Check if a string is a palindrome", () => {
  test("return a boolean", () => {
    expect(typeof palindrome("eye")).toBe("boolean");
  });

  test("Palindrome with only letters", () => {
    expect(palindrome("eye")).toBe(true);
  });

  test("Palindrome with non-alphanumeric characters", () => {
    expect(palindrome("_eye")).toBe(true);
  });

  test("Palindrome with spaces", () => {
    expect(palindrome("race car")).toBe(true);
  });

  test("Palindrome with spaces and non-alphanumerical chars", () => {
    expect(palindrome("My age is 0, 0 si ega ym")).toBe(true);
  });

  test("Palindrome with only numbers and non-alphanumerical chars", () => {
    expect(palindrome("0_0 (: /) 0_0")).toBe(true);
  });

  test("Not a palindrome with only letters", () => {
    expect(palindrome("nope")).toBe(false);
  });

  test("Not a palindrome with non-alphanumeric characters", () => {
    expect(palindrome("five|_/|four")).toBe(false);
  });

  test("Not a palindrome with spaces", () => {
    expect(palindrome("not a palindrome")).toBe(false);
  });

  test("Not a palindrome with spaces and non-alphanumerical chars", () => {
    expect(palindrome("My age is 0, 0 yes")).toBe(false);
  });

  test("Not a palindrome with numbers and non-alphanumerical chars", () => {
    expect(palindrome("0_1 (: /) 0_0")).toBe(false);
  });
});
