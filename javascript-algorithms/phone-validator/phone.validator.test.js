import telephoneCheck from "./phone-validator";

describe("Test telephoneCheck script against several phone formats", () => {
  test("Should return a boolean", () => {
    expect(typeof telephoneCheck("555-555-5555")).toBe("boolean");
  });

  test("Should return true with a standard phone number", () => {
    expect(telephoneCheck("555-555-5555")).toBe(true);
  });

  test("Should return true with a standard number and a prefix", () => {
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
  });

  test("Should return true with a valid number without whitespaces", () => {
    expect(telephoneCheck("5555555555")).toBe(true);
  });
});
