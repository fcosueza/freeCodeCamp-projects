import palindrome from "./palindrome";

describe("Check if a string is a palindrome ignoring non-alphanumerical characters", () => {
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

  test("Check a palindrome with spaces and non-alphanumerical characters", () => {
    expect(palindrome("My age is 0, 0 si ega ym")).toBe(true);
  });

  test("Check a palindrome with only numbers and non-alphanumerical characters", () => {
    expect(palindrome("0_0 (: /) 0_0")).toBe(true);
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

  test("Check not a palindrome with spaces and non-alphanumerical characters", () => {
    expect(palindrome("My age is 0, 0 yes")).toBe(false);
  });

  test("Check not a palindrome with only numbers and non-alphanumerical characters", () => {
    expect(palindrome("0_1 (: /) 0_0")).toBe(false);
  });
});
