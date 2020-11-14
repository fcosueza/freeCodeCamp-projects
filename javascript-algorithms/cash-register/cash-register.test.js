import checkCashRegister from "./cash-register";

describe("Cash register", () => {
  let price = 19.5;
  let cash = 20;

  it("should return an object", () => {
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

  it("should return the proper change (cid)", () => {
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

    const change = { status: "OPEN", change: [["QUARTER", 0.5]] };

    expect(checkCashRegister(price, cash, cid)).toMatchObject(change);
  });

  it("should return the proper change (cid) with another price and cash", () => {
    const price = 3.26;
    const cash = 100;
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

    const change = {
      status: "OPEN",
      change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04]
      ]
    };

    expect(checkCashRegister(price, cash, cid)).toMatchObject(change);
  });

  it("shouldn't return change with a status of insufficient funds", () => {
    const cid = [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ];

    const change = { status: "INSUFFICIENT_FUNDS", change: [] };

    expect(checkCashRegister(price, cash, cid)).toMatchObject(change);
  });

  it("shouldn't return change with enough funds but no matching dime type", () => {
    const cid = [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 1],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ];

    const change = { status: "INSUFFICIENT_FUNDS", change: [] };

    expect(checkCashRegister(price, cash, cid)).toMatchObject(change);
  });

  it("should return change with a status of CLOSED", () => {
    const cid = [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ];

    const change = {
      status: "CLOSED",
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]
    };

    expect(checkCashRegister(price, cash, cid)).toMatchObject(change);
  });
});
