import rot13 from "./caesars-cipher";

describe("Testing rot13 cipher algorithms function", () => {
  test("Decode empty string", () => {
    expect(rot13("")).toEqual("");
  });

  test("Decode a string", () => {
    expect(rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP");
  });

  test("Decode a string with an exclamation mark", () => {
    expect(rot13("SERR CVMMN!")).toEqual("FREE PIZZA!");
  });

  test("Decode a string with an interrogation mark", () => {
    expect(rot13("SERR YBIR?")).toEqual("FREE LOVE?");
  });

  test("Decode a long string", () => {
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toEqual(
      "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    );
  });

  test("Decode a number", () => {
    expect(rot13("123456")).toEqual("123456");
  });

  test("Decode an alphanumerical string", () => {
    expect(rot13("1 SERR CVMMN!")).toEqual("1 FREE PIZZA!");
  });

  test("Decode a string with no alphanumerical characters", () => {
    expect(rot13("SERR_PBQR_PNZC")).toEqual("FREE_CODE_CAMP");
  });
});
