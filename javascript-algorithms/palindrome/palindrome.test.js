import palindrome from "./palindrome";

describe("palindrome() check if a string is a palindrome", () => {
  test("should return boolean", () => {
    expect(typeof palindrome("eye")).toBe("boolean");
  });
});
