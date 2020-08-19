import telephoneCheck from "./phone-validator";

describe("Test telephoneCheck script against several phone formats", () => {
  test("Should return a boolean", () => {
    expect(typeof telephoneCheck("555-555-5555")).toBe("boolean");
  });

  test("Should return true with a valid number", () => {
    expect(telephoneCheck("555-555-5555")).toBe(true);
  });

  test("Should return true with a valid number with white spaces", () => {
    expect(telephoneCheck("555 555 5555")).toBe(true);
  });

  test("Should return true with a valid number with prefix", () => {
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
  });

  test("Should return true with a valid number without digits separation", () => {
    expect(telephoneCheck("5555555555")).toBe(true);
  });

  test("Should return true with a valid number with correct parenthesis", () => {
    expect(telephoneCheck("(555) 555-5555")).toBe(true);
  });

  test("Should return true with valid number with correct parenthesis and prefix", () => {
    expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
  });

  test("Should return false with invalid characters", () => {
    expect(telephoneCheck("5as as?a 910n")).toBe(false);
  });

  test("Should return false with incorrect number of digits", () => {
    expect(telephoneCheck("555-5555")).toBe(false);
  });

  test("Should return false with invalid prefix", () => {
    expect(telephoneCheck("2 555 555-5555")).toBe(false);
  });

  test("Should return false with incorrect parenthesis", () => {
    expect(telephoneCheck("(555 555-5555")).toBe(false);
  });

  test("Should return false with incorrect parenthesis and valid prefix", () => {
    expect(telephoneCheck("1 (555 555 5555)")).toBe(false);
  });
});
