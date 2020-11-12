import checkCashRegister from "./cash-register";

describe("Cash register test suite", () => {
  test("Should return an object", () => {
    const price = 19.5;
    const cash = 20;
    const cid = [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ];

    expect(typeof checkCashRegister(price, cash, cid)).toEqual("object");
  });
});
