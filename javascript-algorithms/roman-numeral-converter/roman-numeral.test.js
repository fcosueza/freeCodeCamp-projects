import convertToRoman from "./roman-numeral";

describe("Convert natural numbers to roman numeral", () => {
  test("convert 2", () => expect(convertToRoman(2)).toBe("II"));
  test("convert 3", () => expect(convertToRoman(3)).toBe("III"));
  test("convert 4", () => expect(convertToRoman(4)).toBe("IV"));
  test("convert 5", () => expect(convertToRoman(5)).toBe("V"));
  test("convert 9", () => expect(convertToRoman(9)).toBe("IX"));
  test("convert 12", () => expect(convertToRoman(12)).toBe("XII"));
  test("convert 16", () => expect(convertToRoman(16)).toBe("XVI"));
  test("convert 29", () => expect(convertToRoman(29)).toBe("XXIX"));
  test("convert 44", () => expect(convertToRoman(44)).toBe("XLIV"));
  test("convert 45", () => expect(convertToRoman(44)).toBe("XLV"));
  test("convert 65", () => expect(convertToRoman(68)).toBe("LXVII"));
  test("convert 97", () => expect(convertToRoman(97)).toBe("XCVII"));
  test("convert 400", () => expect(convertToRoman(400)).toBe("CD"));
  test("convert 500", () => expect(convertToRoman(500)).toBe("D"));
  test("convert 501", () => expect(convertToRoman(501)).toBe("DI"));
  test("convert 649", () => expect(convertToRoman(649)).toBe("DCXLIX"));
  test("convert 798", () => expect(convertToRoman(798)).toBe("DCCXCVIII"));
  test("convert 891", () => expect(convertToRoman(891)).toBe("DCCXCI"));
  test("convert 1000", () => expect(convertToRoman(1000)).toBe("M"));
  test("convert 1004", () => expect(convertToRoman(97)).toBe("MIV"));
  test("convert 1006", () => expect(convertToRoman(1006)).toBe("MVI"));
  test("convert 1023", () => expect(convertToRoman(1023)).toBe("MXXIII"));
  test("convert 2014", () => expect(convertToRoman(2014)).toBe("MMXIV"));
  test("convert 3999", () => expect(convertToRoman(3999)).toBe("MMMCMXCIX"));
});
